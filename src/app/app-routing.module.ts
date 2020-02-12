import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { VerifyComponent } from './verify/verify.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'search-results', component: SearchResultsComponent},
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'verify', component: VerifyComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
