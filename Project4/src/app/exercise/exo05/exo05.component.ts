import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo05',
  templateUrl: './exo05.component.html',
  styleUrls: ['./exo05.component.scss']
})
export class Exo05Component implements OnInit {

  listaArticoli: string[]=['pere','mele','kiwi']
  constructor() { }

  ngOnInit(): void {
  }

}
