import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import {Ng2PaginationModule} from 'ng2-pagination';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { FornecedorComponent } from './fornecedores/fornecedor/fornecedor.component';


export const firebaseConfig = {
  apiKey: "AIzaSyDGphb-T2s-7n5tkThc8tAWuNJLBMoq-lw",
    authDomain: "appcmdb-2ca72.firebaseapp.com",
    databaseURL: "https://appcmdb-2ca72.firebaseio.com",
    storageBucket: "appcmdb-2ca72.appspot.com",
};


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    UsuariosComponent,
    UsuarioComponent,
    LoginComponent,
    FornecedorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    Ng2PaginationModule
  ],
  providers: [appRoutingProviders,LoginService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
