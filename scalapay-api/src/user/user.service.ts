import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDTO } from './user.dto';
import mockUsers from './mock';

@Injectable()
export class UserService {
  private _users: UserDTO[] = mockUsers;

  create(user: UserDTO): UserDTO {
    this._users.push(user);
    return user;
  }

  findAll(): UserDTO[] {
    if (this._users.length === 0) {
      throw new NotFoundException('Users not found.');
    }
    return this._users;
  }

  findOne(id: string): UserDTO {
    const user = this._users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with ID:${id} not found`);
    }

    return user;
  }

  update(id: string, user: Partial<UserDTO>): UserDTO {
    const userIndex = this._users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`User with ID:${id} not found`);
    }

    this._users[userIndex] = { ...this._users[userIndex], ...user };

    return this._users[userIndex];
  }

  remove(id: string): UserDTO {
    const userIndex = this._users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`User with ID:${id} not found`);
    }

    const deletedUser = this._users[userIndex];
    this._users.splice(userIndex, 1);

    return deletedUser;
  }
}
