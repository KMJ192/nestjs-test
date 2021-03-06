import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
  constructor(
    // DB 의존성 주입
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
  ) {}

  async all(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  async create(data): Promise<Role> {
    return this.roleRepository.save(data);
  }

  async findOne(condition): Promise<Role> {
    return this.roleRepository.findOne(condition);
  }

  async update(id: number, data): Promise<any> {
    return this.roleRepository.update(id, data);
  }

  async delete(id: number): Promise<any> {
    return this.roleRepository.delete(id);
  }
}
