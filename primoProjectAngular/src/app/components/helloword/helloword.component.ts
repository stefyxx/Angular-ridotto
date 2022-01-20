import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloword',
  templateUrl: './helloword.component.html',
  styleUrls: ['./helloword.component.scss']
})
export class HellowordComponent implements OnInit {

  public message : string = "Salut les ";
  public students : string="Wad";
  compteur : number =0;
  validate : boolean = false;

  constructor() { }

  ngOnInit(): void {
    //alert("parto ogni volta che usi questa classe e quindi crei l'obj");
  }
  
  saveStudent() : void{
    this.validate=!this.validate;
  }
  AddOne(): void{
    this.compteur +=1;
  }
  
  AddOne2(nb: number):void{
    this.compteur +=nb;
  }


}
