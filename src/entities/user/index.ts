import { UserOnApp } from '@/interfaces/user';

export class User implements UserOnApp {
  email: string;
  createdAt: Date;

  constructor({ email, createdAt }: UserOnApp) {
    this.email = email;
    this.createdAt = createdAt;
  }

  getEmail() {
    return this.email;
  }

  getCreatedAt() {
    return this.createdAt;
  }
}
