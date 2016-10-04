import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from '../../login/login.service';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
public exibir: boolean = false;

  constructor( public authData: LoginService) { }

  ngOnInit() {
     this.authData.islogin();

  }
errorMessage;

postUsuario(nome, email, senha, perfil, status){  
      this.exibir = !this.exibir;
  this.authData.signupUser(nome, email, senha, perfil, status).then(() => {
    },  (error) => {
   // this.errorMessage = error.message; 
    var errorCode = error.code;
if (error.code === 'auth/email-already-in-use'){
    this.errorMessage = "Esse email já esta cadastrado com outro usuário !";
    }
    console.log(this.errorMessage);
})

}

}
