import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo07',
  templateUrl: './demo07.component.html',
  styleUrls: ['./demo07.component.scss']
})
export class Demo07Component implements OnInit {

  parentVar:string="io non mi muovo"
  constructor() { }

  ngOnInit(): void {
  }

}
