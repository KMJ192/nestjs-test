import { Controller, Get } from '@nestjs/common';
import { User } from './models/user.entity';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all-users')
  async all(): Promise<User[]> {
    return this.userService.all();
  }
}
