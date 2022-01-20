import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo03',
  templateUrl: './exo03.component.html',
  styleUrls: ['./exo03.component.scss']
})
export class Exo03Component implements OnInit {

  monNum: number= 3

  

  constructor() { }

  ngOnInit(): void {
  }
  increase():void{
    this.monNum++;
  }
  decrease():void{
    this.monNum--;
  }

  reseat():void{
    this.monNum =3;
  }

}
