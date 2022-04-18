import { IsEmail, IsNotEmpty, MinLength,MaxLength } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  readonly password: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  readonly name: string;
}
