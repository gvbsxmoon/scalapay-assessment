import { UserDTO } from './user.dto';

const mockUsers: UserDTO[] = [
  {
    id: '1',
    email: 'test@scalapay.it',
    password: 'password',
    address: {
      phoneNumber: '0400000000',
      countryCode: 'IT',
      name: 'Joe Consumer',
      postcode: '50056',
      suburb: 'Montelupo Fiorentino',
      line1: 'Via della Rosa, 58',
    },
  },
  {
    id: '2',
    email: 'prod@scalapay.it',
    password: 'password',
    address: {
      phoneNumber: '0400000000',
      countryCode: 'IT',
      name: 'Joe Consumer',
      postcode: '50056',
      suburb: 'Montelupo Fiorentino',
      line1: 'Via della Rosa, 58',
    },
  },
];

export default mockUsers;
