import { Repository } from '@/interfaces/repository';
import { UserOnApp } from '@/interfaces/user';

type UserCreatePayload = {
  currentDate: Date;
};

export abstract class UserRepository implements Repository {
  abstract create(
    email: string,
    payload: UserCreatePayload
  ): Promise<UserOnApp>;
  abstract getUnique(email: string): Promise<UserOnApp>;
}
