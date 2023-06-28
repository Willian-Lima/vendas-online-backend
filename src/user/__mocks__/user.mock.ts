import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '5641546564',
  createdAt: new Date(),
  email: 'emailmock@email.com',
  id: 545,
  name: 'nameMock',
  password: 'senha',
  phone: '34995655645',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
