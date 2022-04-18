import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Crud } from '@nestjsx/crud';
import { User } from './entities/user.entity';

@Crud({
  model: {
      type: User,
  },
})
@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}
}