import { IDatabase } from "../database";
import {
  Connection,
  createConnection,
  Schema,
  Document,
  Model,
} from "mongoose";
import { Logger } from "../../../common/logger";
import * as messages from "../../../locale/message.json";

export class MongoDatabase implements IDatabase {
  connection!: Connection;
  collections: any[];
  private logger: Logger;
  constructor() {
    this.logger = new Logger("MongoDatabase");
  }
  async connect(url: string, options: any): Promise<void> {
    try {
      options.useNewUrlParser = true;
      this.connection = await createConnection(url, options);
      this.logger.info(messages.msg_Mongo_Connected);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
  async createCollecton(name: string): Promise<void> {
    if (!this.connection) {
      throw new Error(messages.msg_Mongo_Connection_Unavailable);
    }
    await this.connection.createCollection(name);
    this.collections.push(name);
    this.logger.info(`${name} -> ${messages.msg_Mongo_Collection_Created}`);
  }
  async createRepository<T>(
    modelName: string,
    schema: Schema,
    collectionName: string
  ): Promise<any> {
    const model: Model<T & Document> = this.connection.model(
      modelName,
      schema,
      collectionName
    );
    // create MongoRepository
    return {};
  }
  createSession(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
