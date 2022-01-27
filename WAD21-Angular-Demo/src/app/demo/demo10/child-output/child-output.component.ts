import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {

  @Output() enterChild : EventEmitter<string>
  @Output() leaveChild : EventEmitter<string>

  messageOnEnter : string = "je rentre dans l'enfant"
  messageOnLeave : string = "je sors de l'enfant"

  constructor() {
    this.enterChild = new EventEmitter<string>()
    this.leaveChild = new EventEmitter<string>()
   }

  ngOnInit(): void {
  }

  onEnter() {
    this.enterChild.emit(this.messageOnEnter)
  }

  onLeave() {
    this.leaveChild.emit(this.messageOnLeave)
  }

}
