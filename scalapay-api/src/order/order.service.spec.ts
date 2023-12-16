import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { HttpException } from '@nestjs/common';
import axios from 'axios';
import mockOrder from './mock';

jest.mock('axios');

describe('OrderService', () => {
  let orderService: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderService],
    }).compile();

    orderService = module.get<OrderService>(OrderService);
  });

  describe('createOrder', () => {
    it('should create an order and return the order response', async () => {
      const orderBody = mockOrder;
      const orderResponse = {
        token: expect.any(String),
        expires: expect.any(String),
        checkoutUrl: expect.any(String),
      };

      (axios.post as jest.Mock).mockResolvedValue({ data: orderResponse });

      const result = await orderService.createOrder(orderBody);

      expect(axios.post).toHaveBeenCalledWith(
        'https://integration.api.scalapay.com/v2/orders',
        orderBody,
        {
          headers: {
            Authorization: `Bearer ${process.env.SCALAPAY_SECRET}`,
            Accept: 'application/json',
          },
        },
      );
      expect(result).toEqual(orderResponse);
    });

    it('should handle errors and throw HttpException', async () => {
      const orderBody = mockOrder;
      const errorResponse = {
        response: {
          data: {
            httpStatusCode: expect.any(Number),
            errorCode: expect.any(String),
          },
        },
      };

      (axios.post as jest.Mock).mockRejectedValue(errorResponse);

      await expect(orderService.createOrder(orderBody)).rejects.toThrow(
        new HttpException(
          { message: 'Error while creating order: Any' },
          400,
        ),
      );
    });

    it('should handle generic errors and throw a generic error', async () => {
      const orderBody = mockOrder;
      const genericError = new Error('Some generic error');

      (axios.post as jest.Mock).mockRejectedValue(genericError);

      await expect(orderService.createOrder(orderBody)).rejects.toThrow(
        new Error('Error creating order: Some generic error'),
      );
    });
  });
});
