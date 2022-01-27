import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo06',
  templateUrl: './demo06.component.html',
  styleUrls: ['./demo06.component.css']
})
export class Demo06Component implements OnInit {

  nbSeconds : number = 90061 // 1 jour 1 heure 1 minute et 1 seconde
  nbSeconds2 : number = 90120 // 1 jour 1 heure 2 minutes et 0 seconde

  varBase : number = 2
  varPow : number = 8

  constructor() { }

  ngOnInit(): void {
  }

}
