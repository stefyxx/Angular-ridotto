import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direttive',
  templateUrl: './direttive.component.html',
  styleUrls: ['./direttive.component.scss']
})
export class DirettiveComponent implements OnInit {

  public active : boolean = false;
  public myList : string[]=["Bonjour", "Salut", "Coucou"];
  public maVariable : string="";

  constructor() { }

  ngOnInit(): void {
  }

  isActive():void{
    this.active=!this.active;
  }

  supprimer(ind: number):void{
    this.myList.splice(ind, 1);
  }


}
