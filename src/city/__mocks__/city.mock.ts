import { stateMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityMock: CityEntity = {
  id: 544,
  stateId: stateMock.id,
  name: 'CityName',
  createdAt: new Date(),
  updatedAt: new Date(),
};
