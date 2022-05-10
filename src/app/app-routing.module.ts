import { GuestGuard } from './guards/guest.guard';

import { DatingComponent } from './dating/dating.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: '', component: LoginFormComponent, canActivate: [GuestGuard]},
  { path: 'dating', component: DatingComponent, canActivate: [UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
