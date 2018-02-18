import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthService} from "./components/services/auth.service";
import {SearchComponent} from "./components/search/search.component";

const routes: Routes = [

  { path: '', component: HomeComponent, canActivate: [AuthService]},
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent,  canActivate: [AuthService]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
