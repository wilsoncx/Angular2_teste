import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


import { LoginService } from '../../login/login.service';


@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css'],
})
export class FornecedorComponent implements OnInit {
fornecedores: FirebaseListObservable<any>;
  constructor( public authData: LoginService, af: AngularFire ) {
    this.fornecedores = af.database.list('/fornecedores');

  }

  ngOnInit() {
   // this.authData.islogin();
  }
submitted = false;
onSubmit() { this.submitted = true; }
fornecedor = [];
active = true;
edit = false;

postFornecedor(){
 this.fornecedores.push(this.fornecedor);
 this.active=false;
  };

deleteFornecedor(key: string) {
    this.fornecedores.remove(key);
  }
updateFornecedor(fornecedor){
this.fornecedor = fornecedor;
this.edit=true;
}
editFornecedor(key, newnome:any){
  var nome = newnome.nome;
  var fone = newnome.fone;
  var email = newnome.email;
 this.fornecedores.update(key, {nome: nome, fone: fone, email: email});
 this.active=false;

}
}
