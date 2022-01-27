import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.css']
})
export class Demo02Component implements OnInit {

  maVariable1 : string  = "Hello les WAD21 !"
  maVariable2 : number  = 25
  maVariable3 : boolean  = false

  constructor() { }

  ngOnInit(): void {
  }

}
