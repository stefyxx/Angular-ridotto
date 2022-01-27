import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FakeAutentificazService {

  statusAuth:boolean=false

  user : User = {
    username : undefined
  }

  constructor() { }

  login(name: string) : boolean{
    this.statusAuth=true
    this.user.username = name
    return this.statusAuth
  }
  logout() : boolean{
    this.statusAuth=false
    this.user.username =undefined
    return this.statusAuth
  }
}
