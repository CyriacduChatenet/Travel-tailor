import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

import { SignupUserInputDTO } from './dto/signup-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() signupUserDto: SignupUserInputDTO): Promise<User> {
    return this.userService.create(signupUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':email')
  findOneByEmail(@Param('email') email: string): Promise<User> {
    return this.userService.findOneByEmail(email);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() signupUserDto: any,
  ): Promise<UpdateResult> {
    return this.userService.update(id, signupUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.userService.remove(id);
  }
}
