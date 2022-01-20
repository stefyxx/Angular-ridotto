import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  public seconds : number = 67;
  public isActive : boolean = false;
  public interval : any;

  constructor() { }

  ngOnInit(): void {
  }

  public startChrono():void{
    this.interval = setInterval( () => this.seconds += 1, 1000 );
    this.isActive = true;
  }

  public pauseChrono():void{
    clearInterval(this.interval);
    this.isActive = false;
  }

  public resetChrono():void{
    this.pauseChrono();
    this.seconds = 0;
  }
}
