import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { FakeAuthService } from './services/fake-auth.service';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.css']
})
export class Demo11Component implements OnInit {

  isConnected : boolean
  username: string

  user: User

  constructor(private fakeAuth : FakeAuthService) { }

  ngOnInit(): void {
    this.isConnected = this.fakeAuth.statusAuth
    this.user = this.fakeAuth.user
  }

  login() {
    this.isConnected = this.fakeAuth.login(this.username)
    this.user = this.fakeAuth.user
    
    console.log('this.user :>> ', this.user);
  }
  
  logout() {
    
    this.isConnected = this.fakeAuth.logout()
  }

}
