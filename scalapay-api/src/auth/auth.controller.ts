import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /* @Post()
  signIn(
    @Body() credentials: { email: string; password: string },
    @Res() res,
  ): void {
    try {
      const user = this.authService.signIn(credentials);
      const token = this.authService.generateJwtToken(user);
      res.status(200).json({ token });
    } catch (error) {
      res.status(error.status).json({ message: error.message });
    }
  } */
}
