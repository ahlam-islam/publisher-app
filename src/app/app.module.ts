import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpService } from './Services/http.service';
import { SignalRService } from './Services/signalr.service';
import { SharedModule } from './Shared/Shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  
  ],
  providers: [HttpService,SignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
