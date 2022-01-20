import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo01',
  templateUrl: './exo01.component.html',
  styleUrls: ['./exo01.component.scss']
})
export class Exo01Component implements OnInit {

  maVar1: string ="Hello wad"
  maVar2: number = 25
  maVar3: boolean =true

  constructor() { }

  ngOnInit(): void {
  }

}
