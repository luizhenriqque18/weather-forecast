import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-list-forecasts',
  templateUrl: './list-forecasts.component.html',
  styleUrls: ['./list-forecasts.component.scss']
})
export class ListForecastsComponent implements OnInit {

  constructor(
    private service: ForecastService,
    private router: Router,
    private route: ActivatedRoute) { }

  public listCity: Array<any>;

  ngOnInit(): void {
    console.log(this.service.listCity.getValue());
    if(this.service.listCity.getValue() !== []){
      this.listCity = this.service.listCity.getValue();
    }
    this.service.listCity.subscribe( e => {
      this.listCity = e.list;
    });
  }

  public details( value: string): void {
    this.router.navigate(['/details', value])
  }
}
