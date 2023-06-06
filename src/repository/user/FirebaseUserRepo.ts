import { dbAdmin } from "@/db/firebase-admin";
import { NotFound } from "@/entities/exceptions";
import { UserOnApp, UserRepository } from "@/interfaces/user";

export class FirebaseUserRepo implements UserRepository {
  async getUser(email: string): Promise<UserOnApp> {
    const userRef = dbAdmin.collection('users').doc(email);
    const userDoc = await userRef.get();
    if(!userDoc.exists) {
      throw new NotFound();
    }

    return userDoc.data() as UserOnApp;
  };

  async create(email: string): Promise<UserOnApp> {
    const currentDate = new Date();
    await dbAdmin.collection('users').doc(email).set({ email, createdAt: currentDate });

    return {
      email,
      createdAt: currentDate,
    }
  }
}