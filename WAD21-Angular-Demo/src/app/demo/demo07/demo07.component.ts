import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo07',
  templateUrl: './demo07.component.html',
  styleUrls: ['./demo07.component.css']
})
export class Demo07Component implements OnInit {

  myCustomStyle : any = {
    'color': 'red'
  }

  myCustomStyle2 : any = {
    'font-size': '29px'
  }

  myCustomClass : string = 'alert alert-success'

  isEnabled: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  activate() {
    this.isEnabled = ! this.isEnabled
  }

}
