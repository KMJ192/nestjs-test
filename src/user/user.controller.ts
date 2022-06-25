import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserCreateDto } from './models/user-create.dto';
import { User } from './models/user.entity';
import { UserService } from './user.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all-users')
  async all(): Promise<User[]> {
    return this.userService.all();
  }

  @Post()
  async create(@Body() body: UserCreateDto): Promise<User> {
    const password = await bcrypt.hash('1234', 12);
    const { first_name, last_name, email } = body;
    return this.userService.create({
      first_name,
      last_name,
      email,
      password,
    });
  }

  // @Get(':id')
  // async get(@Param('id') id: number) {
  //   return this.userService.findOne({ id });
  // }

  // @Put(':id')
  // async update(@Param('id') id: number) {

  // }
}
