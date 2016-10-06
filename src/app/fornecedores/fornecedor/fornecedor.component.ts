import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2';


import { LoginService } from '../../login/login.service';



@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
public exibir: boolean = false;
fornecedores: FirebaseListObservable<any>;
fornecedoresupdate: FirebaseObjectObservable<any>;
  constructor( public authData: LoginService, af: AngularFire) { 
     this.fornecedores = af.database.list('/fornecedores');
    this.fornecedoresupdate = af.database.object('/fornecedores');

  }

  ngOnInit() {
   // this.authData.islogin();
  }
errorMessage;
submitted = false;
onSubmit() { this.submitted = true; } 
fornecedor = [];
active = true;
edit = false;

postFornecedor(){  
 this.fornecedores.push(this.fornecedor);
 this.active=false;
  };  
     // this.exibir = !this.exibir;

deleteFornecedor(key: string) {    
    this.fornecedores.remove(key); 
  }
updateFornecedor(fornecedo){
this.fornecedor = fornecedo;
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