import { Component, OnInit } from '@angular/core';
import { NavBar } from 'src/app/models/nav-bar';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public listaLink : NavBar[]=[
    {name:"home", url:"/"},
    {name:"skills", url:"/skills"},
    {name:"contacts", url:"/contact"},
    {name:"direttiva", url:"/direttiva"}
  ]
  //questa variabile mi permette di visualizzare o meno il mio menu
  public visible : boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  public isVisible():void{
    this.visible=!this.visible;
  }
}
