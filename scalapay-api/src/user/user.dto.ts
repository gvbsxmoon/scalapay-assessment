import { Address } from '@types';

export class UserDTO {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public address: Address,
  ) {}
}
