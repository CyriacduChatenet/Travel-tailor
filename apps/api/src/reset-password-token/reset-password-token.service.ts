import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResetPasswordTokenDto } from './dto/update-reset-password-token.dto';
import { ResetPasswordToken } from './entities/reset-password-token.entity';

@Injectable()
export class ResetPasswordTokenService {
  constructor(
    @InjectRepository(ResetPasswordToken)
    private resetPasswordTokenRepository: Repository<ResetPasswordToken>,
    private jwtService: JwtService,
  ) {}

  create(userId: string) {
    const payload = {
      user: userId,
    };
    return this.resetPasswordTokenRepository.save({
      token: this.jwtService.sign(payload),
    });
  }

  findAll() {
    return this.resetPasswordTokenRepository.find({
      relations: {
        user: true,
      },
    });
  }

  findOne(id: string) {
    return this.resetPasswordTokenRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  update(id: string, updateResetPasswordTokenDto: UpdateResetPasswordTokenDto) {
    return this.resetPasswordTokenRepository.update(
      id,
      updateResetPasswordTokenDto,
    );
  }

  remove(id: string) {
    return `This action removes a #${id} resetPasswordToken`;
  }
}
