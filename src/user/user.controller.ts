import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { returnUserDto } from './dtos/returnUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }

  // Recupera os usuários que estão salvos no no DB do user.service (users)
  @Get()
  async getAllUser(): Promise<returnUserDto[]> {
    return (await this.userService.getAllUser()).map((UserEntity) => new returnUserDto(UserEntity));
  }
}
