import { Service } from '@/interfaces/service';
import { UserOnApp } from '@/interfaces/user';
import { UserRepository } from '@/repository/user';

export class UserService implements Service {
  constructor(private userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUnique(email: string): Promise<UserOnApp> {
    if (!email || !email.length) throw new Error('Invalid data');
    return await this.userRepository.getUnique(email);
  }

  async create(
    email: string,
    payload: { currentDate: Date }
  ): Promise<UserOnApp> {
    if (!email || !email.length) throw new Error('Invalid data');
    if (!payload?.currentDate || !(payload.currentDate instanceof Date)) {
      throw new Error('Invalid data');
    }
    return await this.userRepository.create(email, payload);
  }
}
