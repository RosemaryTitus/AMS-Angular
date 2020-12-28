import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  onLogin:FormGroup;
  constructor(private fb:FormBuilder,private auth:AngularFireAuth,private router:Router) { }
  // @Output() newItemEvent = new EventEmitter<string>();
  

  ngOnInit(): void {
    this.onLogin=this.fb.group({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
  login()
{
  // this.newItemEvent.emit(l.value);
  const{email,password}=this.onLogin.value;
  this.auth.signInWithEmailAndPassword(email,password).then(()=>this.router.navigate(['home']));
  // const redirectToProfileEditOrLogin = () => map(user => user ? ['profiles', user, 'edit'] : ['login']);
  // const accountAdmin = (next) => pipe(customClaims, map(claims => claims[`account-${next.params.accountId}-role`] === 'home'));
}

}
