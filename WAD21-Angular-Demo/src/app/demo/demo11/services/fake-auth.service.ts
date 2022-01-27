import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  statusAuth : boolean = false

  user : User = {
    username : undefined
  }

  constructor() { }

  login(name: string) : boolean {
    console.log('name :>> ', name);
    this.statusAuth = true
    this.user.username = name
    console.log('this.user :>> ', this.user);
    return this.statusAuth
  }

  logout() : boolean{
    this.statusAuth = false
    this.user.username = undefined
    return this.statusAuth
  }
}
