class HTTPException {

  constructor(type) {
    this.error = true;
  }

  get status() { return this._status; }
  set status(status) { this._status = status; }

  get message() { return this._message; }
  set message(message) { this._message = message; }

}

class BadRequest extends HTTPException {
  constructor(message) {
    super();
    this.type = "Bad Request";
    this.message = message;
    this.status = 400;
  }
}

class DatabaseError extends HTTPException {
  constructor(message) {
    super();
    this.type = "Internal Server Error";
    this.message = message;
    this.status = 500;
  }
}

class NotFound extends HTTPException {
  constructor(message) {
    super();
    this.type = "Not found";
    this.message = message;
    this.status = 404;
  }
}

export let Exceptions = {
  BadRequest,
  DatabaseError,
  NotFound
};

export function ExceptionHandler(exception) {
  if (exception instanceof HTTPException)
    return { ok: false, error: true, message: exception.message, status: exception.status, type: exception.type };
  throw exception;
}
