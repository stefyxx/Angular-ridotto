import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ti-attacco',
  templateUrl: './ti-attacco.component.html',
  styleUrls: ['./ti-attacco.component.scss']
})
export class TiAttaccoComponent implements OnInit {

  @Input()figlioVar:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
