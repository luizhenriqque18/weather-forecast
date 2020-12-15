import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators'
import { Subject } from 'rxjs/internal/Subject';
import { ForecastService } from './services/forecast.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
}
