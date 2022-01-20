import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.scss']
})
export class Demo04Component implements OnInit {

  nbTemperature:number=5
  strTemperatura:string=""
  
  constructor() { }

  ngOnInit(): void {
  }

  celsius():void{
    this.nbTemperature= (this.nbTemperature - 32)*5/9;
    this.strTemperatura= "C°"
  }
  farenheit():void{
    this.nbTemperature= (this.nbTemperature*1.8)+32;
    this.strTemperatura= "F°"
  }

}
