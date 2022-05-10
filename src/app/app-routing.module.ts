import { DatingComponent } from './dating/dating.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginFormComponent, },
  { path: 'dating', component: DatingComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
