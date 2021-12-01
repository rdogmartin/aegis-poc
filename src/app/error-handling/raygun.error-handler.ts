import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class RaygunErrorHandler implements ErrorHandler {
  public constructor() { }

  public handleError(err: any): void {
    console.log(`An error occurred: ${err}`)
    // Log error to a service like Raygun
    // this.raygunService.logError(err);
  }
}
