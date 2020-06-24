export abstract class BaseCtrl {
  public errorForbidden = 403;
  public statusOk = 200;
  public badRequest = 400;
  abstract model: any;
}
