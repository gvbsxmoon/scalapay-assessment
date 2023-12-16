import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { v4 as uuidv4 } from 'uuid';
import { AuthGuard } from '@auth/auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: Omit<UserDTO, 'id'>, @Res() res) {
    try {
      const createdUser = this.userService.create({ id: uuidv4(), ...user });
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Res() res) {
    try {
      const usersList = this.userService.findAll();
      res.status(200).json(usersList);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Res() res) {
    try {
      const user = this.userService.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUser: Partial<UserDTO>,
    @Res() res,
  ) {
    try {
      const updatedUser = this.userService.update(id, updateUser);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Res() res) {
    try {
      const deletedUser = this.userService.remove(id);
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }
}
