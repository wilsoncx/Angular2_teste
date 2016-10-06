import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  displayname;
  erroMsg;  
  exibir: boolean = false;
   constructor(public af: AngularFire,  public route: Router, public authData: LoginService) {
    
  }
  ngOnInit() {
    if (this.authData.onlogin == false) {
      console.log("não logado");
      this.route.navigate(['']);     
    }else{
      this.route.navigate(['home'])
    }
  }   
  login(email, senha) {
      this.af.auth.login({email: email, password: senha},
      {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
       }).then(auth => {
      this.route.navigate(['home']);
      this.authData.onlogin=true;
      }, error =>{
          this.erroMsg = error.message;
          this.exibir = true;

      })      
    }


}
