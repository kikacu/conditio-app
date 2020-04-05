export interface IDatabase {
  connect(url: string, options: any): Promise<void>;
  createCollecton(): Promise<any>;
  createRepository(): Promise<any>;
  createSession(): Promise<any>;
}
