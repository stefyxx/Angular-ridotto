import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrls: ['./demo03.component.css']
})
export class Demo03Component implements OnInit {

  nb : number = 0
  nb2 : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  increase() : void {
    this.nb ++
  }

  decrease() : void {
    this.nb --
  }

  reset() : void {
    this.nb = 0;
  }

  increase2() : void {
    this.nb2 ++
  }

  decrease2() : void {
    this.nb2 --
  }

  reset2() : void {
    this.nb2 = 0;
  }

}
