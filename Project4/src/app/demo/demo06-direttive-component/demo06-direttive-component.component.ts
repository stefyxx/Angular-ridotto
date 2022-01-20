import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo06-direttive-component',
  templateUrl: './demo06-direttive-component.component.html',
  styleUrls: ['./demo06-direttive-component.component.scss']
})
export class Demo06DirettiveComponentComponent implements OnInit {

  myStyle: any={
    'color': 'green'
  }

  myClass: string="alert alert-info"

  isAble:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  active(){
    this.isAble=!this.isAble
  }
}
