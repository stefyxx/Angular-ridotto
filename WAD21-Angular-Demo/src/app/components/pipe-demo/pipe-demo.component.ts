import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent implements OnInit {

  public product : Iproduct = { 
    name : "gel hydroalcoholique",
    price : 19.10,
    quantity : 1}

  constructor() { }

  ngOnInit(): void {
  }

}
