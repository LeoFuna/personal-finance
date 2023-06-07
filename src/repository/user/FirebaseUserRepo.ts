import { dbAdmin } from "@/db/firebase-admin";
import { NotFound } from "@/entities/exceptions";
import { UserOnApp } from "@/interfaces/user";
import { UserRepository } from ".";

export class FirebaseUserRepo extends UserRepository {
  async getUnique(email: string): Promise<UserOnApp> {
    const userRef = dbAdmin.collection('users').doc(email);
    const userDoc = await userRef.get();
    if(!userDoc.exists) {
      throw new NotFound();
    }

    return userDoc.data() as UserOnApp;
  };

  async create(email: string, { currentDate }: { currentDate: Date }): Promise<UserOnApp> {
    await dbAdmin.collection('users').doc(email).set({ email, createdAt: currentDate });

    return {
      email,
      createdAt: currentDate,
    }
  }
}