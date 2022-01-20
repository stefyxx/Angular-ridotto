import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo04',
  templateUrl: './exo04.component.html',
  styleUrls: ['./exo04.component.scss']
})
export class Exo04Component implements OnInit {

  maVar : boolean= false
  isDisabled: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
