import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { LoginService } from '../login/login.service';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: FirebaseListObservable<any>;
  constructor(public us: LoginService, public af: AngularFire ) { 
    this.usuarios = af.database.list('/userProfile');
  
}
  ngOnInit() {
  this.us.islogin();
}
  

}
