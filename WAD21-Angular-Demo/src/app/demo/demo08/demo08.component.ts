import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo08',
  templateUrl: './demo08.component.html',
  styleUrls: ['./demo08.component.css']
})
export class Demo08Component implements OnInit {

  show : boolean = false

  persons : any[] = [
    {name: 'Quentin', countryTag: 'BE', lang: 'FR'},
    {name: 'Mike', countryTag: 'US', lang: 'EN'},
    {name: 'Joris', countryTag: 'NL', lang: 'NL'},
  ]

  liste2 = {
    "mot 1" : "Definition 1",
    "mot 2" : "Definition 2", 
    "mot 3" : "Definition 3",
    "mot 4" : "Definition 4"
  }

  maVariable : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show
  }

  getClass(countryTag : string) {
    switch(countryTag) {
      case 'BE' : return 'alert alert-warning';
      case 'US' : return 'alert alert-primary';
      case 'NL' : return 'alert alert-danger';
      default: return ''
    }
  }

}
