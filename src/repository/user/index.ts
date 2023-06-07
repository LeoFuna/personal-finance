import { Repository } from "@/interfaces/repository";

type UserCreatePayload = {
  currentDate: Date;
}

export abstract class UserRepository implements Repository {
  abstract create(email: string, payload: UserCreatePayload): Promise<any>;
  abstract getUnique(email: string): Promise<any>;
}