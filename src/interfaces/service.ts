/* eslint-disable no-unused-vars */
export interface Service {
  create: (uniqueKey: string, payload: any) => Promise<any>;
  getUnique: (uniqueKey: string) => Promise<any>;
}
