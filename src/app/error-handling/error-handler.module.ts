import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';

import { GlobalErrorHandler } from './global-error-handler';

@NgModule({
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
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
