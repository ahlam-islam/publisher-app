import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/Home/Home.component';
import { TrackingReportComponent } from './features/TrackingReport/tracking-report/tracking-report.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: "Report", component: TrackingReportComponent }
    ]
  }
];

export const FeaturesRoutesModule = RouterModule.forChild(routes);
