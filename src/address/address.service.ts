import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>
  ) {}

  // O DTO criado é o tipo de dado que ira ser utilizado
  async createAddress(createAddressDto: CreateAddressDto, userId: number): Promise<AddressEntity> {
    return this.addressRepository.save({
      ...createAddressDto,
      userId,
    });
  }
}
