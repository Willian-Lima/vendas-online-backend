import { userEntityMock } from '../../user/__mocks__/user.mock';
import { AddressEntity } from '../entities/address.entity';

export const addressMock: AddressEntity = {
  id: 45,
  userId: userEntityMock.id,
  complement: 'asdsadwfa',
  numberAddress: 654,
  cep: '2514541',
  cityId: 54,
  createdAt: new Date(),
  updatedAt: new Date(),
};
