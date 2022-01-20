import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo05-temperature-prof',
  templateUrl: './demo05-temperature-prof.component.html',
  styleUrls: ['./demo05-temperature-prof.component.scss']
})
export class Demo05TemperatureProfComponent implements OnInit {

  tempUser : number = 0
  unitUser : string = 'c'
  
  constructor() { }

  ngOnInit(): void {
  }

}
