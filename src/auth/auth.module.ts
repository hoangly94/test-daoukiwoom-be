import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule, 
    PassportModule, 
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.ACCESS_TOKEN_SECRET,
      signOptions: { 
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
       },
    }),
  ],
  controllers: [AuthController,],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
