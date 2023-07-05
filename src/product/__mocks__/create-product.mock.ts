import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDTO } from '../dtos/create-product.dto';

export const createProduct: CreateProductDTO = {
  categoryId: categoryMock.id,
  name: 'dasdasdafsa',
  price: 35.78,
  image: 'deasfsdgerefqefsfa',
};
