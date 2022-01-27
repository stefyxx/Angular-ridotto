import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  cart: Article[] = []

  constructor() { }

  addToCart(article: Article) {
    let index = this.cart.findIndex(x => x.label == article.label)

    if (index == -1) this.cart.push(article)
    else this.increaseQuantity(index)
  }

  removeToCart(index: number) {
    this.cart.splice(index, 1)
  }


  increaseQuantity(index: number) {
    this.cart[index].quantity ++
  }
  
  decreaseQuantity(index: number) {
    if (this.cart[index].quantity > 1) this.cart[index].quantity --
    else this.removeToCart(index)

  }

}
