import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  Adduser(newuser: NgForm) {
    let userData = {"username":newuser.value['username'],"email":newuser.value['email'],"password":newuser.value['password']}
    this.loginService.adduser(userData).subscribe((res:any)=>{
      newuser.resetForm()
    })
  }

}
