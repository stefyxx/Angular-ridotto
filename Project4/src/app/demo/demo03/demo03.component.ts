import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrls: ['./demo03.component.scss']
})
export class Demo03Component implements OnInit {


  nbSeconds : number=541236987
  base1:number=21
  monPow:number=3
  constructor() { }

  ngOnInit(): void {
  }

}
