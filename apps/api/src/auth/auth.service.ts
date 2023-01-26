import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { SignupUserInputDTO } from '../user/dto/signup-user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async validateUser(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username);

    if (!user) {
      throw new HttpException('User is not found', HttpStatus.NOT_FOUND);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
  }

  public async signin(user: any) {
    const findUser = await this.userService.findOneByUsername(user.username);

    if (!findUser) {
      throw new HttpException(`User isn't exist`, HttpStatus.NOT_ACCEPTABLE);
    }

    const payload = {
      username: findUser.username,
      password: findUser.password,
      roles: findUser.roles,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  public async signup(signupUserInputDTO: SignupUserInputDTO) {
    const user = await this.userService.findOneByUsername(
      signupUserInputDTO.username,
    );

    console.log(user);

    if (user) {
      throw new HttpException(
        'User is already exist',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    const password = await bcrypt.hash(signupUserInputDTO.password, 10);

    this.userService.create({
      ...signupUserInputDTO,
      password,
    });

    const payload = {
      username: signupUserInputDTO.username,
      password: signupUserInputDTO.password,
      roles: 'user',
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
