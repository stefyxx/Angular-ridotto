import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-figlio-lista',
  templateUrl: './figlio-lista.component.html',
  styleUrls: ['./figlio-lista.component.scss']
})
export class FiglioListaComponent implements OnInit {
  @Input() listaF: string[]=[]
  listaMia: string[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  addArticolo(index: number){
    let articolo = this.listaF[index]
    this.listaMia.push(articolo)

  }

}
