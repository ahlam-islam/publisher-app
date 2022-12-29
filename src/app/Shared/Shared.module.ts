import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/Header.component';
import { ErrorComponent } from './Error/Error.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const SharedComponent = [FooterComponent , HeaderComponent , SignInComponent , ErrorComponent]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [SharedComponent]
  ,
  exports:[SharedComponent]
})
export class SharedModule { }
