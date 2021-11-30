import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditUserComponent } from './components/edit-user/edit-user.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


const routes: Routes = [
  {
    path: 'edit-user', component: EditUserComponent
  },
  {
    path: 'signin', component: SignInComponent
  },
  {
    path: '', component: OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
