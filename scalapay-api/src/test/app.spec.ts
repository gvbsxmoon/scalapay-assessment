import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import { OrderDTO } from '@src/order/order.dto';
import mockOrder from '@src/order/mock';

describe('AppModule', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should handle validation errors and return the appropriate error response', async () => {
    const order: OrderDTO = {
      ...mockOrder,
      totalAmount: { ...mockOrder.totalAmount, amount: '' },
    };

    const response = await request(app.getHttpServer())
      .post('/order')
      .send(order)
      .expect(400);

    expect(response.body).toEqual({
      timestamp: expect.any(String),
      path: '/order',
      message: {
        message: [
          'totalAmount.amount should not be empty',
          'totalAmount.amount must be a number string',
        ],
        error: 'Bad Request',
        statusCode: 400,
      },
    });
  });
});
