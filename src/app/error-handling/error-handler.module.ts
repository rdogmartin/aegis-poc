import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';

import { RaygunErrorHandler } from './raygun.error-handler';

@NgModule({
  providers: [
    {
      provide: ErrorHandler,
      useClass: RaygunErrorHandler,
    },
  ],
})
export class ErrorHandlerModule {
  public constructor(@Optional() @SkipSelf() self: ErrorHandlerModule) {
    if (self) {
      throw new Error(
        'ErrorHandlerModule is already loaded. Import it in the AppModule only.');
    }
  }
}
