import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { FakeAutentificazService } from './services/fake-autentificaz.service';

@Component({
  selector: 'app-demo08',
  templateUrl: './demo08.component.html',
  styleUrls: ['./demo08.component.scss']
})
export class Demo08Component implements OnInit {

  isConnected:boolean=true
  username: string=""

  // user :User {
  //   username:""
  // }
  

  constructor(private _fakeService : FakeAutentificazService) { }

  ngOnInit(): void {
    this.isConnected = this._fakeService.statusAuth
  }

  //controllare QUELLO DEL PROF !!!!

  login(){
    this._fakeService.login(this.username)
    this.isConnected = this._fakeService.statusAuth
    // this._fakeService.user =this.user
    
  }
  logout(){
    this._fakeService.logout()
    this.isConnected = this._fakeService.statusAuth
  }

}
