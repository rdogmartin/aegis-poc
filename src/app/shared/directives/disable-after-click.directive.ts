import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
})
export class DisableAfterClickDirective {

  public constructor(private el: ElementRef) { }

  @HostListener('click', ['$event'])
  public onClick(): void {
    this.el.nativeElement.disabled = true;
  }

}
