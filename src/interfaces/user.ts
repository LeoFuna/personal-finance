export interface UserOnApp {
  email: string;
  createdAt: Date;
}

export interface UserRepository {
  create: (email: string) => Promise<UserOnApp>;
  getUser: (email: string) => Promise<UserOnApp>;
}