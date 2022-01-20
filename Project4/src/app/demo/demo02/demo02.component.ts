import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.scss']
})
export class Demo02Component implements OnInit {

  maVar1: string ="Hello wad"
  maVar2: number = 255.564789
  //maVar3: boolean =true
  maVar3: Date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
