import { Component, OnInit } from '@angular/core';
import { Lien } from 'src/app/models/lien.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listeLien : Lien[] = [
    {nom : "Démos", children : [
      {nom : "Demo bindings", url :"demo/demo_01"},
      {nom : "Demo Pipes", url :"demo/demo_02"},
      {nom : "Demo Directives", url :"demo/demo_03"}
    ]},
    {nom : "Exercices", children : [
      {nom : "Exercice 1", url : "exo1"},
      {nom : "Exercice 2", url : "exo2"},
    ]},

    {nom : "Home", url : "home"}
   //valeur par défaut :
   //{nom : "toto", url:"", isChildrenVisible : false, children : []}    
  ] 


  constructor() { }

  ngOnInit(): void {
  }

  switchCategoryVisible(index : number) {
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible
  }

}
