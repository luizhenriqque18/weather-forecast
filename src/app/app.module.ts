import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListForecastsComponent } from './components/list-forecasts/list-forecasts.component';
import { DetailsForecastComponent } from './components/details-forecast/details-forecast.component';
import { ForecastService } from './services/forecast.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListForecastsComponent,
    DetailsForecastComponent,
    NavBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
