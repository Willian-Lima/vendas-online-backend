import { cartMock } from '../../cart/__mocks__/cart.mock';
import { productMock } from '../../product/__mocks__/product.mock';
import { CartProductEntity } from '../entities/cart-product.entity';

export const cartProductMock: CartProductEntity = {
  amount: 623,
  cartId: cartMock.id,
  createdAt: new Date(),
  id: 9,
  productId: productMock.id,
  updatedAt: new Date(),
};
