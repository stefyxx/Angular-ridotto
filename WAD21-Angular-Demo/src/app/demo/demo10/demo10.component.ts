import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.css']
})
export class Demo10Component implements OnInit {

  messageParent : string = "Message provenant du parent"
  colorParent : string = "alert alert-danger"

  messageInputParent : string 
  messageByChild : string = "Mets ta souris sur le composant enfant"

  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
    this.colorParent = this.colorParent == "alert alert-danger" ? "alert alert-success" : "alert alert-danger";
  }

  onParent(message : string) {
    this.messageByChild = message
  }

}
