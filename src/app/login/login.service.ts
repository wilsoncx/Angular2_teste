import { Injectable } from '@angular/core';
import  *  as firebase from  'firebase';
import { AngularFire, AuthProviders, AuthMethods, AngularFireAuth } from 'angularfire2';
import {Router} from '@angular/router';


@Injectable()
export class LoginService {
  public fireAuth: any;
  public userProfile: any;
public useremail: any;
public uid: any;
public onlogin:boolean = false;


  constructor(public route: Router, public auth1: AngularFireAuth, public af: AngularFire) {
       var config = {
       apiKey: "AIzaSyDGphb-T2s-7n5tkThc8tAWuNJLBMoq-lw",
        authDomain: "appcmdb-2ca72.firebaseapp.com",
        databaseURL: "https://appcmdb-2ca72.firebaseio.com",
        storageBucket: "appcmdb-2ca72.appspot.com",
        messagingSenderId: "217895221434"
      };
       firebase.initializeApp(config);
      this.fireAuth = firebase.auth();
      this.userProfile = firebase.database().ref('/userProfile');   

    }
  loginUser(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

 
  signupUser(nome: string, email: string, senha: string, perfil: string, status: string): any {
    return this.fireAuth.createUserWithEmailAndPassword(email, senha).then((newUser) => {
      this.fireAuth.signInWithEmailAndPassword(email, senha).then((authenticatedUser) => {
        this.userProfile.child(authenticatedUser.uid).set({
          email: email,
          nome: nome,
          perfil: perfil,
          status: status
        });
      });
    });
  } 

   createFonecedores(nome: string, email: string, fone: string): any {
        firebase.database().ref().child('/fornecedores').push({
          email: email,
          nome: nome,
          fone: fone,
        });
  } 
  
  resetPassword(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

 logoutUser(): any{
     this.af.auth.logout();
 }
 islogin(){
 if (this.onlogin == false) {
      console.log("não logado");
      this.route.navigate(['']);     
    }

 }
 /*
  firebase.auth().onAuthStateChanged(function(user) {
   if (user==null) {
      console.log("não logado");
      this.route.navigate(['']);     
    }
})*/
 }
