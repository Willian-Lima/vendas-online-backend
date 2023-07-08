import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UpdatePasswordDTO } from './dtos/update-password.dto';
import { UserId } from 'src/decorators/user-id.decorator';

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
  async getAllUser(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUser()).map((UserEntity) => new ReturnUserDto(UserEntity));
  }

  @Get('/:userId')
  async getUserById(@Param('userId') userId: number): Promise<ReturnUserDto> {
    return new ReturnUserDto(await this.userService.getUserByUsingRelations(userId));
  }

  @Patch()
  @UsePipes(ValidationPipe)
  async updatePasswordUser(
    @Body() updatePasswordDTO: UpdatePasswordDTO,
    @UserId() userId: number
  ): Promise<UserEntity> {
    return this.userService.updatePasswordUser(updatePasswordDTO, userId);
  }
}
