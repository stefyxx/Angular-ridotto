import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo01',
  templateUrl: './exo01.component.html',
  styleUrls: ['./exo01.component.css']
})
export class Exo01Component implements OnInit {

  tempUser : number = 0
  unitUser : string = 'c'

  constructor() { }

  ngOnInit(): void {
  }

}
