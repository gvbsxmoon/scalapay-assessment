import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderDTO } from './order.dto';
import { AuthGuard } from '@auth/auth.guard';
import mockOrder from './mock';

describe('OrderController', () => {
  let orderController: OrderController;
  let orderService: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    })
      .overrideGuard(AuthGuard)
      .useValue({ canActivate: () => true })
      .compile();

    orderController = module.get<OrderController>(OrderController);
    orderService = module.get<OrderService>(OrderService);
  });

  describe('createOrder', () => {
    it('should create an order and return the order response', async () => {
      const orderBody: OrderDTO = mockOrder;
      const orderResponse = {
        token: expect.any(String),
        expires: expect.any(String),
        checkoutUrl: expect.any(String),
      };

      jest.spyOn(orderService, 'createOrder').mockResolvedValue(orderResponse);

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await orderController.createOrder(orderBody, res);

      expect(orderService.createOrder).toHaveBeenCalledWith(orderBody);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(orderResponse);
    });

    it('should handle errors and return the error response', async () => {
      const orderBody: OrderDTO = mockOrder;
      const error = {
        status: expect.any(Number),
        response: {
          message: expect.any(String),
        },
      };

      jest.spyOn(orderService, 'createOrder').mockRejectedValue(error);

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await orderController.createOrder(orderBody, res);

      expect(orderService.createOrder).toHaveBeenCalledWith(orderBody);
      expect(res.status).toHaveBeenCalledWith(error.status);
      expect(res.json).toHaveBeenCalledWith(error.response);
    });
  });
});
