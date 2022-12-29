import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './Shared/Error/Error.component';
import { SignInComponent } from './Shared/SignIn/SignIn.component';

const routes: Routes = [
  { path: 'Index', component: SignInComponent },
  { path: '', redirectTo: '/Index', pathMatch: 'full' },
  {path:'Home' , loadChildren: () => import("./Features/features/features.module").then(model => model.FeaturesModule)},
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
