import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crono';

  // public minutes : number= 0; // non mi serve, v pipe 'crono'
  public secondes : number = 0;
  public isActive :boolean =false;
  public intervallo : any;

  Start():void{
    this.intervallo=setInterval(()=> this.secondes +=1, 1000);
    //aumenta ogni 1000millisec=1sec
    this.isActive = true; //rende disactived=true; e cosi' il mio bottone 'start' non é più cliccabile
  }

  Pause():void{
    clearInterval(this.intervallo);
    this.isActive=false;
  }

  Reset():void{
    this.Pause(); // blocca setIntervallo e mette this.isActive=false
    this.secondes=0;
  }

}
