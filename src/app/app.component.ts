import { Component } from '@angular/core';
import {LoginComponent } from './login/login.component';
import {AngularFireDatabase} from '@angular/fire/database';
import {ViewChild, AfterViewInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
 
 @ViewChild(LoginComponent) childReference;
 login:boolean=true;

 ngAfterViewInit()
 {
   this.login=this.childReference.check_login;
   console.log(this.login);
 }

}
