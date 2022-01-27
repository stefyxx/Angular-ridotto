import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = "red"
    this.el.nativeElement.style.color = "white"
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null
    this.el.nativeElement.style.color = null
  }

  @HostListener('click') 
  onClick() {
    this.el.nativeElement.style.fontSize = "25px";
  }

}
