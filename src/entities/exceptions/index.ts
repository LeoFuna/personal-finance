export class NotFound extends Error {
  apiError = true;
  statusCode = 404;

  constructor() {
    super();
    Object.setPrototypeOf(this, NotFound.prototype);

    this.name = `${NotFound.name}`;
    this.message = 'Not Found Error';
  }
}
