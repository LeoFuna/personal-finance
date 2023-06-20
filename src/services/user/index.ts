import { Service } from '@/interfaces/service';
import { UserOnApp } from '@/interfaces/user';
import { UserRepository } from '@/repository/user';

export class UserService implements Service {
  constructor(private userRepository: UserRepository) {}

  async getUnique(email: string): Promise<UserOnApp> {
    // Validaçao aqui
    return await this.userRepository.getUnique(email);
  }

  async create(
    email: string,
    payload: { currentDate: Date }
  ): Promise<UserOnApp> {
    // Validaçao aqui
    return await this.userRepository.create(email, payload);
  }
}
