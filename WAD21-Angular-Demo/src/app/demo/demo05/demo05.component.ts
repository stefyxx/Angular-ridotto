import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo05',
  templateUrl: './demo05.component.html',
  styleUrls: ['./demo05.component.css']
})
export class Demo05Component implements OnInit {

  maVariable1 : string = "Hello les WAD21"
  maVariable2 : number = 6.321234
  maVariable3 : Date = new Date()
  
  constructor() { }

  ngOnInit(): void {
  }

}
