import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { UserId } from '../decorators/user-id.decorator';
import { ReturnAddressDto } from './dtos/returnAddress.dto';

@Roles(UserType.User, UserType.Admin)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body()
    createAddressDto: CreateAddressDto,
    @UserId() userId: number
  ): Promise<AddressEntity> {
    console.log('user:', userId);
    return this.addressService.createAddress(createAddressDto, userId);
  }

  @Get()
  async findAddressByUserId(@UserId() userId: number): Promise<ReturnAddressDto[]> {
    console.log('user:', userId);
    return (await this.addressService.findAddressByUserId(userId)).map(
      (addresses) => new ReturnAddressDto(addresses)
    );
  }
}
