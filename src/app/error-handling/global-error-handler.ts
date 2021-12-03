import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  public constructor() { }

  public handleError(err: any): void {
    console.error(`An error occurred: ${err}`)
    // Tell user and log error
    // alert('Something went wrong');
    // this.raygunService.logError(err);
  }
}
