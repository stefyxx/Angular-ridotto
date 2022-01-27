import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo07',
  templateUrl: './demo07.component.html',
  styleUrls: ['./demo07.component.scss']
})
export class Demo07Component implements OnInit {

  parentVar:string="io non mi muovo"
  colorParent : string = "alert alert-danger"
  parentVarInput:string=""

  constructor() { }

  ngOnInit(): void {
  }
  changeColor() {
    this.colorParent = this.colorParent == "alert alert-danger" ? "alert alert-success" : "alert alert-danger";
  }

}
