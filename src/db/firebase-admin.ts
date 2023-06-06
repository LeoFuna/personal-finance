import { initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { credential } from "firebase-admin";

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
}

const apps = getApps();

const appFound = apps.find(({ name }) => name === 'AdminApp');

const app = appFound ? appFound : initializeApp({
  credential: credential.cert(serviceAccount),
}, `AdminApp`);

export const dbAdmin = getFirestore(app);