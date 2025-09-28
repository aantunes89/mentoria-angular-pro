import { QuantityDescriptionPipe } from './quantity-description.pipe';

describe('QuantityDescriptionPipe', () => {
  it('should return unavailable product text', () => {
    const pipe = new QuantityDescriptionPipe();

    const quantity = 0;

    expect(pipe.transform(quantity)).toEqual('Product is unavailable');
  });
  it('should return text from only one product', () => {
    const pipe = new QuantityDescriptionPipe();

    const quantity = 1;

    expect(pipe.transform(quantity)).toEqual('Last in stock!');
  });
  it('should return text from many products', () => {
    const pipe = new QuantityDescriptionPipe();

    const quantity = 10;

    expect(pipe.transform(quantity)).toEqual(`${quantity} items available`);
  });
});
