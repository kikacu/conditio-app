import { IRepository } from "../repository";

export class MongoRepository implements IRepository {
  delete(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  create(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  find(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  update(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
