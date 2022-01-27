import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.css']
})
export class Demo04Component implements OnInit {

  isEnabled : boolean = false

  lastname : string = "Geerts"
  firstname : string = "Quentin"

  min : number = 1
  max : number = 50
  step : number = 2
  value : number = 1

  constructor() { }

  ngOnInit(): void {
  }

}
