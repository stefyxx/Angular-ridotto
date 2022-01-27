import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-figlio',
  templateUrl: './input-output-figlio.component.html',
  styleUrls: ['./input-output-figlio.component.scss']
})
export class InputOutputFiglioComponent implements OnInit {
  
  
  @Input() listaArticoliF:Array<string>=[]
  @Input() figlioVarInput:string =""
  @Input() figlioVarInput2:string =""

  

  constructor() { }
  
  ngOnInit(): void {
  }
  
  
}
