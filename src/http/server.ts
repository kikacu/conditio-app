import express, { Request, Response, NextFunction } from "express";
import * as env from "../environemnt";
import { Logger } from "../common/logger";
import messages from "../locale/message.json";

export class Server {
  private readonly port: number;
  private logger: Logger;
  constructor(
    process: NodeJS.Process,
    private readonly expressApp: express.Application
  ) {
    this.port = env.getPort(process);
    this.logger = new Logger("Server");
  }

  public async start(): Promise<void> {
    return new Promise((resolve: any, reject: any) => {
      const app: express.Application = this.expressApp;

      app.use((req: Request, res: Response, next: NextFunction) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
      });

      app.get("/", (req: Request, res: Response) => {
        res.send(JSON.parse(messages.msg_App_Running));
      });

      this.registerRoutes();

      this.handle404Error();

      this.handle500Error();

      app.listen(this.port, () => {
        this.logger.info(messages.msg_App_Running);
        resolve();
      });
    });
  }
  private registerRoutes(): void {
    // registerRoutes(this.expressApp);
  }

  private handle404Error(): void {
    // Handle 404
    this.expressApp.use((req: Request, res: Response) => {
      res.status(404).send("404: Page not found");
    });
  }

  private handle500Error(): void {
    // Handle 500
    this.expressApp.use(
      (error: any, req: Request, res: Response, next: NextFunction) => {
        const response: any = {
          message:
            (error && error.message) || "500: Internal Server Error occured!",
          stack: (error && error.stack) || "",
        };
        res.status(500).send(response);
      }
    );
  }
}
