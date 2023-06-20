import { UserOnApp } from '@/interfaces/user';
import { UserRepository } from '.';

export class MongoDbUserRepo extends UserRepository {
  async getUnique(email: string): Promise<UserOnApp> {
    // Faz a logica de pegar o usuário pelo email no MongoDb
    const createdAt = new Date(); //'Data ficticia da criaçao do usuario no banco do MongoDB'
    return {
      email,
      createdAt,
    };
  }

  async create(
    email: string,
    payload: { currentDate: Date }
  ): Promise<UserOnApp> {
    // Faz a logica de criar o usuário no MongoDb
    return {
      email,
      createdAt: payload.currentDate,
    };
  }
}
