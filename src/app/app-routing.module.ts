import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsForecastComponent } from './components/details-forecast/details-forecast.component';
import { ListForecastsComponent } from './components/list-forecasts/list-forecasts.component';

const routes: Routes = [
  {
    path: '',
    component: ListForecastsComponent
  },
  {
    path: 'details/:id',
    component: DetailsForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
