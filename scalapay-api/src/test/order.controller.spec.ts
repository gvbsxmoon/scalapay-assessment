import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from '../order/order.controller';
import { OrderService } from '../order/order.service';
import { OrderDTO } from '../order/order.dto';
import mockOrder from '../order/mock';

describe('OrderController', () => {
  let controller: OrderController;
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    }).compile();

    controller = module.get<OrderController>(OrderController);
    service = module.get<OrderService>(OrderService);
  });

  it('should create an order and return the order response', async () => {
    const order: OrderDTO = mockOrder;

    const expectedResponse = {
      token: expect.any(String),
      expires: expect.any(String),
      checkoutUrl: expect.any(String),
      order: {
        ...mockOrder,
      },
    };

    jest.spyOn(service, 'createOrder').mockResolvedValue(expectedResponse);

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await controller.createOrder(order, res);

    expect(service.createOrder).toHaveBeenCalledWith(order);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expectedResponse);
  });

  it('should let the AllExceptionsFilter handle the response', async () => {
    const order: OrderDTO = mockOrder;
    const error = new Error('An error occurred');

    jest.spyOn(service, 'createOrder').mockRejectedValue(error);

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await expect(async () => controller.createOrder(order, res)).not.toThrow();

    expect(service.createOrder).toHaveBeenCalledWith(order);

    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
