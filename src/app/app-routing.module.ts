import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo ,redirectLoggedInTo} from '@angular/fire/auth-guard';
import { RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from '@angular/fire/auth';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['message']);
 const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  {path:'message',component:MessageComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: 'home', component:  HomeComponent , canActivate: [AngularFireAuthGuard] },
  {path:'',component:LoginComponent,canActivate:[AngularFireAuth]}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
