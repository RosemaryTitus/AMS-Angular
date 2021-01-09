import { Component } from '@angular/core';
import {LoginComponent } from './login/login.component';
import {AngularFireDatabase} from '@angular/fire/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  log=false;

}
