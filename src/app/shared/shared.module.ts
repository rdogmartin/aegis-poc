import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
  ]
})
export class SharedModule {
  public constructor(@Optional() @SkipSelf() self: SharedModule) {
    if (self) {
      throw new Error(
        'SharedModule is already loaded. Import it in the AppModule only.');
    }
  }
}
