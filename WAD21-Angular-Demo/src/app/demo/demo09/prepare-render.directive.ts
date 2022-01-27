import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrepareRender]'
})
export class PrepareRenderDirective {

  constructor(private el : ElementRef) {
    console.log(el);
    this.el.nativeElement.style.backgroundColor = "lightgrey";
    this.el.nativeElement.style.color = "red";
    this.el.nativeElement.style.fontSize = "21px";

    this.el.nativeElement.innerText = ""
   }

}
