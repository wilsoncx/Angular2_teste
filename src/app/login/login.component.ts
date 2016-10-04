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
   constructor(public af: AngularFire,  private _router: Router, public authData: LoginService) {
  firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          this.displayname = user.email;
       this._router.navigate(['home']);     
         } else {
      console.log("não logado");
      this._router.navigate(['']);     
     }
   } )
  }
  ngOnInit() {
    
  }   
  login(email, senha) {
      this.authData.loginUser(email, senha).then( AuthData => {
      this._router.navigate(['home']);      
    }, error => {
  })
}

}
