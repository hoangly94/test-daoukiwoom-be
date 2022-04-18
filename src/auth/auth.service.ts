import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import * as bcrypt from 'bcrypt';
import { Connection } from 'typeorm';
import { EXISTED_EMAIL, INVALID_CREDENTIALS } from '../http-message';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private connection: Connection,
  ) { }

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.usersService.findByEmail(loginAuthDto.email);
    if (!user) {
      //random delay response time in range 0-1.5s to prevent hackers guessing email exists or not 
      await new Promise(r => setTimeout(r, (Math.random() * 15)*100 ));
      throw new BadRequestException(INVALID_CREDENTIALS);
    }

    const isMatchedPassword = await bcrypt.compare(loginAuthDto.password, user.password);

    if (!isMatchedPassword) throw new BadRequestException(INVALID_CREDENTIALS);

    const { password, ...payload } = user;
    return {
      access_token: this.jwtService.sign(payload),
      expired: process.env.ACCESS_TOKEN_EXPIRATION
    };
  }

  async register(registerAuthDto: RegisterAuthDto) {
    const user = await this.usersService.findByEmail(registerAuthDto.email);

    if (user) throw new BadRequestException(EXISTED_EMAIL);
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(registerAuthDto.password, salt);

    const newUser = {
      ...registerAuthDto,
      password:hashedPassword,
    }

    const createdUser = await this.usersService.create(newUser);

    if (!createdUser)
      throw new InternalServerErrorException();

    return {
      name: createdUser.name,
      email: createdUser.email,
      created_at: createdUser.created_at,
    };
  }
}
