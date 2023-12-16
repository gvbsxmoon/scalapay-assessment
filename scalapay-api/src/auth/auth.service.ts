import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import mockUsers from '@user/mock';
import { UserDTO } from '@user/user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  signIn(credentials: { email: string; password: string }): UserDTO {
    const user = mockUsers.find((user) => user.email == credentials.email);

    if (!user) {
      throw new UnauthorizedException('Incorrect credentials.');
    }

    return user;
  }

  generateJwtToken(user: UserDTO) {
    const { id, email } = user;

    const payload = {
      id,
      email,
    };

    return this.jwtService.sign(payload);
  }
}
