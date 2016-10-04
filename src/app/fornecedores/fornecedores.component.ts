import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  fornecedores: FirebaseListObservable<any>;
  constructor(public us: LoginService, public af: AngularFire ) { 
    this.fornecedores = af.database.list('/fornecedores');
}
  ngOnInit() {
  this.us.islogin();
}
  

}
