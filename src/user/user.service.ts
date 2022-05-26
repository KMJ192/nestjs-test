import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService {
  constructor(
    // DB 의존성 주입
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async all(): Promise<User[]> {
    // 모든 유저를 찾아서 반환
    return await this.userRepository.find();
  }

  async create(data): Promise<User> {
    return this.userRepository.save(data);
  }

  async findOne(condition): Promise<User> {
    return this.userRepository.findOneBy(condition);
  }
}
