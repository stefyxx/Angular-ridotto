import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-input-output05',
  templateUrl: './exo-input-output05.component.html',
  styleUrls: ['./exo-input-output05.component.scss']
})
export class ExoInputOutput05Component implements OnInit {

  listaArticoli:Array<string>=["pantalone","gonna","pigiama"]
  //listaArticoli:string[]=[]
  parentVarInput: string=""
  parentVarInput2: string=""
  nonAttivo:boolean=true


  constructor() { }

  ngOnInit(): void {
    //console.log(this.listaArticoli)
    
  }

  aggiungi(){
    //this.listaArticoli[]=this.parentVarInput   //creare un if se esiste già
    this.listaArticoli.push(this.parentVarInput)
  }
  sopprimi() {
    let found=false
    for (let i = 0; i < this.listaArticoli.length; i++) {
      if (this.parentVarInput2 == this.listaArticoli[i]) {
        this.listaArticoli.splice(i,1)
        found = true
      }
    }
    //if(found == false){this.nonAttivo !=this.nonAttivo}
    if(!found){this.nonAttivo = !this.nonAttivo}
    else{
    }

  }

}
