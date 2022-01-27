import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo04',
  templateUrl: './exo04.component.html',
  styleUrls: ['./exo04.component.css']
})
export class Exo04Component implements OnInit {

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
