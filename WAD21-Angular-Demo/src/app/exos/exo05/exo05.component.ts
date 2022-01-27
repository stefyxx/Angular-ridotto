import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo05',
  templateUrl: './exo05.component.html',
  styleUrls: ['./exo05.component.css']
})
export class Exo05Component implements OnInit {

  article : string = ""

  cart : string[] = []

  constructor() { }

  ngOnInit(): void {
    this.cart.push('carotte', 'poire', 'ananas')
    // console.log('cart :>> ', this.cart) // clo + tab
  }

  addToCart() {
    this.cart.push(this.article)
  }

  // Liée à l'output
  deleteToCart(index : number) {
    this.cart.splice(index, 1)
  }

}
