import { Component, OnInit } from '@angular/core';
//import { AngularFire } from 'AngularFire2';

import { LoginService } from '../../login/login.service';



@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
public exibir: boolean = false;

  constructor( public authData: LoginService) { }

  ngOnInit() {
     this.authData.islogin();
  }
errorMessage;

postFornecedor(nome, email, fone){  
      this.exibir = !this.exibir;
      this.authData.createFonecedores(nome, email, fone)
}

}