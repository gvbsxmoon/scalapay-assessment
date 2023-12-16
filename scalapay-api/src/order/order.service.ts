import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { OrderDTO } from './order.dto';

@Injectable()
export class OrderService {
  async createOrder(orderBody: OrderDTO) {
    try {
      const response = await axios.post(
        process.env.SCALAPAY_API_URL,
        orderBody,
        {
          headers: {
            Authorization: `Bearer ${process.env.SCALAPAY_SECRET}`,
            Accept: 'application/json',
          },
        },
      );

      return response.data;
    } catch (error) {
      if (error.response) {
        const { httpStatusCode, errorCode } = error.response.data;
        throw new HttpException(
          { message: `Error while creating order: ${errorCode}` },
          httpStatusCode,
        );
      } else {
        throw new Error(`Error creating order: ${error.message}`);
      }
    }
  }
}
