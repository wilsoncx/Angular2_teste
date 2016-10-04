import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { FornecedorComponent } from './fornecedores/fornecedor/fornecedor.component';
import {AuthFireService } from './auth-fire.service';
import {ImportsService } from './imports.service';


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
    FornecedoresComponent,
    FornecedorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [appRoutingProviders,LoginService, UsuariosService, AuthFireService, ImportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
