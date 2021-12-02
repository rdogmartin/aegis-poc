import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DisableAfterClickDirective } from './disable-after-click.directive';

@NgModule({
  declarations: [
    DisableAfterClickDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DisableAfterClickDirective,
  ]
})
export class DirectivesModule { }
