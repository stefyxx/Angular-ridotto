import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.scss']
})
export class DirectiveDemoComponent implements OnInit {

  public IsVisible : boolean = false

  public maListe : string[] = ["Bonjour", "Salut", "coucou"]

  public maVariable : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  switchVisible() : void {
    this.IsVisible = !this.IsVisible
  }

  supprimer(indice : number) : void {
    this.maListe.splice(indice, 1)
  }

}
