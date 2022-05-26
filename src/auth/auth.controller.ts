import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './models/register.dto';

@Controller()
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    if (body.password !== body.password_confirm) {
      throw new BadRequestException('password do not match');
    }

    const { first_name, last_name, email, password } = body;
    const hashed = await bcrypt.hash(password, 12);
    return this.userService.create({
      first_name,
      last_name,
      email,
      password: hashed,
    });
  }
}
