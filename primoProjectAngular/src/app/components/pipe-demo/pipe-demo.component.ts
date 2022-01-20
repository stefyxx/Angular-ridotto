import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent implements OnInit {

  public product:Iproduct = {
    name:"gel hydroalcolique",
    price: 19.99,
    quantity: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

}
