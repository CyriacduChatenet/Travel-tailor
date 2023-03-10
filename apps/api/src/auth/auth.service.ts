import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import {
  SigninDTO,
  SignupDTO,
  ForgotPasswordDTO,
  ResetPasswordDTO,
} from '@travel-tailor/types'
import * as bcrypt from 'bcrypt'

import { MailService } from '../mail/mail.service'
import { ResetPasswordTokenService } from './reset-password-token/reset-password-token.service'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private resetPasswordTokenService: ResetPasswordTokenService,
    private mailService: MailService
  ) {}

  public async validateUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email)

    if (!user) {
      throw new HttpException('User is not found', HttpStatus.NOT_FOUND)
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (user && isMatch) {
      const { password, ...result } = user
      return result
    }
  }

  public async signin(user: SigninDTO) {
    const findUser = await this.userService.findOneByEmail(user.email)

    if (!findUser) {
      throw new HttpException(`User isn't exist`, HttpStatus.NOT_ACCEPTABLE)
    }

    const payload = {
      email: findUser.email,
      password: findUser.password,
      roles: findUser.roles,
    }
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }

  public async signup(signupUserInputDTO: SignupDTO) {
    const userInDB = await this.userService.findOneByEmail(
      signupUserInputDTO.email
    )

    if (userInDB) {
      throw new HttpException(
        'User is already exist',
        HttpStatus.NOT_ACCEPTABLE
      )
    }

    const password = await bcrypt.hash(signupUserInputDTO.password, 10)

    const user = await this.userService.create({
      ...signupUserInputDTO,
      password,
    })

    await this.mailService.sendSignupMail(signupUserInputDTO.email)

    const payload = {
      email: signupUserInputDTO.email,
      password: signupUserInputDTO.password,
      roles: signupUserInputDTO.roles,
    }
    return {
      signinToken: this.jwtService.sign(payload),
      user,
    }
  }

  public async forgotPassword(forgotPasswordDto: ForgotPasswordDTO) {
    const user = await this.userService.findOneByEmail(forgotPasswordDto.email)
    const resetToken = await this.resetPasswordTokenService.create(user.id)
    const userUpdated = await this.userService.update(user.id, {
      resetPasswordToken: resetToken.id,
    })
    await this.mailService.sendForgotPasswordMail(
      forgotPasswordDto.email,
      `${process.env.CLIENT_APP_URL}/reset-password/${resetToken.token}`
    )
    return userUpdated
  }

  public async resetPassword(
    resetToken: string,
    resetPasswordDto: ResetPasswordDTO
  ) {
    const token = await this.resetPasswordTokenService.findOne(resetToken)
    const user = await this.userService.findOneByEmail(token.user.email)
    const userUpdated = await this.userService.update(user.id, {
      password: await bcrypt.hash(resetPasswordDto.password, 10),
    })
    await this.mailService.sendConfirmResetPasswordMail(user.email)
    return userUpdated
  }
}
