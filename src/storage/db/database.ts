import { Schema } from "mongoose";

export interface IDatabase {
  connect(url: string, options: any): Promise<void>;
  createCollecton(name: string): Promise<void>;
  createRepository(
    modelName: string,
    schema: Schema,
    collectionName: string
  ): Promise<any>;
  createSession(): Promise<any>;
}
