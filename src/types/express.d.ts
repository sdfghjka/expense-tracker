import * as Express from 'express-serve-static-core';

declare global {
  namespace Express {
    interface Response {
      locals: {
        success_msg?: string;
        error_msg?: string;
      };
    }
  }
}