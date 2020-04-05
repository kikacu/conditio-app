import { IDatabase } from "../database";
import { Connection, createConnection } from "mongoose";
import { Logger } from "../../../common/logger";
import * as messages from "../../../locale/message.json";

export class MongoDatabase implements IDatabase {
  connection!: Connection;
  private logger: Logger;
  constructor() {
    this.logger = new Logger("MongoDatabase");
  }
  async connect(url: string, options: any): Promise<void> {
    options.useNewUrlParser = true;
    this.connection = await createConnection(url, options);
    this.logger.info(messages.msg_Mongo_Connected);
    throw new Error("Method not implemented.");
  }
  createCollecton(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  createRepository(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  createSession(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
