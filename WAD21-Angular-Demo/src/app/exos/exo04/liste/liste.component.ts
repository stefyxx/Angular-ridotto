import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input() cart : string[]

  @Output() eventDelete : EventEmitter<number>

  constructor() { 
    this.eventDelete = new EventEmitter<number>()
  }

  ngOnInit(): void {
  }

  emitDeleteToCart(index : number) {
    this.eventDelete.emit(index)
  }

  // Version plus optimisée en commentaire
  // deleteToCart(index : number) {
  //   this.cart.splice(index, 1)
  // }

}
