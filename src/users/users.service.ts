import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { from, Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<User>{
  constructor(@InjectRepository(User) repo) {
    super(repo)
  }

  findByEmail(email: string): Promise<User> {
    return this.repo.findOne({ where: { email } });
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.repo.save(createUserDto);
  }
}
