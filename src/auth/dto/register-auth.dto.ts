import { IsNotEmpty } from "class-validator";
import { CreateUserDto } from "../../users/dto/create-user.dto";

export class RegisterAuthDto extends CreateUserDto{
    @IsNotEmpty()
    name: string;
}
