import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  public constructor() { }

  public handleError(err: any): void {
    console.error(`An error occurred: ${err}`)
    // Log error to a service like Raygun
    // this.raygunService.logError(err);
  }
}