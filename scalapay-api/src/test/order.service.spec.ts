import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from '../order/order.service';
import axios from 'axios';
import { OrderDTO } from '../order/order.dto';
import mockOrder from '../order/mock';
import { HttpException } from '@nestjs/common';

jest.mock('axios');

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderService],
    }).compile();

    service = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should use correct configuration parameters for API call', async () => {
    const order: OrderDTO = mockOrder;

    jest.spyOn(axios, 'post').mockResolvedValue({ data: {} });

    await service.createOrder(order);

    expect(axios.post).toHaveBeenCalledWith(
      process.env.SCALAPAY_API_URL,
      mockOrder,
      {
        headers: {
          Authorization: `Bearer ${process.env.SCALAPAY_SECRET}`,
          Accept: 'application/json',
        },
      },
    );
  });

  it('should create an order successfully', async () => {
    const orderData: OrderDTO = mockOrder;

    const expectedMockedResponse = {
      token: 'mockedToken',
      expires: 'expireDate',
      checkoutUrl:
        'https://portal.integration.scalapay.com/checkout/mockedToken',
    };

    jest
      .spyOn(axios, 'post')
      .mockResolvedValue({ data: expectedMockedResponse });

    const result = await service.createOrder(orderData);

    expect(result).toEqual(expectedMockedResponse);
  });

  it('should handle API error', async () => {
    const order: OrderDTO = mockOrder;
    const expectedMockerError = {
      response: {
        data: {
          httpStatusCode: 500,
          errorCode: 'API_ERROR_CODE',
        },
      },
    };

    jest.spyOn(axios, 'post').mockRejectedValueOnce(expectedMockerError);

    await expect(service.createOrder(order)).rejects.toThrow(
      new HttpException(
        { message: `Error while creating order: API_ERROR_CODE` },
        500,
      ),
    );
  });
});
