import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFire } from 'angularfire2';


import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
constructor(public us: LoginService, public af: AngularFire ) {
}
 
 logout(){
    firebase.auth().signOut();
  }
}
