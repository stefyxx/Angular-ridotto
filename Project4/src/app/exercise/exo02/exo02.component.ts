import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo02',
  templateUrl: './exo02.component.html',
  styleUrls: ['./exo02.component.scss']
})
export class Exo02Component implements OnInit {

  maVar1: string ="Hello wad"
  maVariable2 : number  = 25
  maVariable3 : boolean  = false

  constructor() { }

  ngOnInit(): void {
  }

}
