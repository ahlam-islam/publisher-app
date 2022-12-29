import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './Users/users/users.component';
import { NotificationsComponent } from './Notifications/notifications/notifications.component';
import { TrackingReportComponent } from './TrackingReport/tracking-report/tracking-report.component';
import { HttpClientModule } from '@angular/common/http';
import { FeaturesRoutesModule } from '../Features.routing.module';
import { HomeComponent } from './Home/Home.component';
import { FormsModule } from '@angular/forms';

const components = [UsersComponent, NotificationsComponent, TrackingReportComponent , HomeComponent]
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    HttpClientModule,
    FeaturesRoutesModule,
    FormsModule
  ],
  exports: []
})
export class FeaturesModule { }
