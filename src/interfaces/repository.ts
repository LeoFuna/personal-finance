export interface Repository {
  create: (uniqueKey: string, payload: any) => Promise<any>;
  getUnique: (uniqueKey: string) => Promise<any>;
}