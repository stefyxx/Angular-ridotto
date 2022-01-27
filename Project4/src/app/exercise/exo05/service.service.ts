import { Injectable } from '@angular/core';
import { Articolo } from './articolo.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  cart:Articolo[]=[]

  constructor() { }

  addArticle(article:Articolo){
    let index = this.cart.findIndex(x=>x.nome == article.nome)
    //se l'elemento non é trovato, index =-1
    if(index==-1) this.cart.push(article)
    else this.increaseQuantity(index)

  }
  removeArticle(index:number){
    this.cart.splice(index,1)
  }

  increaseQuantity(index:number){
    this.cart[index].quantita ++
  }

  decreaseQuantity(index:number){
    if(this.cart[index].quantita >1) this.cart[index].quantita--
    else this.removeArticle(index)
  }

}
