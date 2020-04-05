export interface IRepository {
  delete(): Promise<any>;
  create(): Promise<any>;
  find(): Promise<any>;
  update(): Promise<any>;
}
