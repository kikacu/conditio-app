import winston from "winston";

export class Logger {
  private logger: winston.Logger;

  constructor(component: string) {
    const transports: any[] = [];

    transports.push(new winston.transports.Console({ handleExceptions: true }));

    this.logger = winston.createLogger({
      format: winston.format.printf(
        (info) =>
          `${new Date()} -> ${info.level}, ${component}, ${info.message}`
      ),
      transports,
    });
  }

  public debug(message: string): void {
    this.logger.debug(message);
  }
  public error(message: string): void {
    this.logger.error(message);
  }
  public info(message: string): void {
    this.logger.info(message);
  }
  public verbose(message: string): void {
    this.logger.verbose(message);
  }
  public warn(message: string): void {
    this.logger.warn(message);
  }
}
