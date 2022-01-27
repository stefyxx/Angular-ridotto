import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo03',
  templateUrl: './exo03.component.html',
  styleUrls: ['./exo03.component.css']
})
export class Exo03Component implements OnInit {

  links : Link[]

  constructor() { 
    this.links = [
      { title : 'Home', url : '' },
      { title : 'Demos', children : [
        { title : 'Demo 1 - One Way Binding', url : '/demo/demo01' },
        { title : 'Demo 2 - Two Way Binding', url : '/demo/demo02' },
        { title : 'Demo 3 - Event Binding', url : '/demo/demo03' },
        { title : 'Demo 4 - Attributes Binding', url : '/demo/demo04' },
        { title : 'Demo 5 - Pipes', url : '/demo/demo05' },
        { title : 'Demo 6 - Custom Pipes', url : '/demo/demo06' },
        { title : 'Demo 7 - Component Directives', url : '/demo/demo07' },
        { title : 'Demo 8 - Structural Directives', url : '/demo/demo08' },
        { title : 'Demo 9 - Custom Directives', url : '/demo/demo09' },
      ] },
      { title : 'Exos', children : [
        { title : 'Exo 1 - Convert Temp', url : '/exos/exo01' },
        { title : 'Exo 2 - Convert Seconds', url : '/exos/exo02' },
        { title : 'Exo 3 - Directives Nav', url : '/exos/exo03' },
      ] },
    ]

    console.log(this.links);
  }

  ngOnInit(): void {
  }

  toggleVisible(index : number) {
    this.links[index].isVisible = !this.links[index].isVisible
  }

}

export class Link {
  title: string
  url?: string
  children?: Link[]
  isVisible?: boolean

  constructor() {
    this.title = ""
  }
}