import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-details-forecast',
  templateUrl: './details-forecast.component.html',
  styleUrls: ['./details-forecast.component.scss']
})
export class DetailsForecastComponent implements OnInit {

  constructor(private service: ForecastService, private route: ActivatedRoute) { }

  private $reultOb: Observable<any>;
  public weather: any = {};
  public forecast: any = {};
  public loadStatus: boolean = true;

  ngOnInit(): void {
    this.route.paramMap.subscribe( (e: any) =>{
      let {params: {id}} = e;
      this.$reultOb = this.service.weatherUsingGet(id)
      .pipe(mergeMap(weather=> this.service.forecastUsingGet(weather).pipe(map(forecast => {
        return { weather, forecast }
      }))))
    })

    this.$reultOb.subscribe(
      ({weather, forecast}) => {
        this.weather = weather;
        this.forecast = forecast;
      },
      (error) => {},
      () => {
        console.log('fim');
        this.loadStatus = false}
    );
  }

  public convertMS( milliseconds ): string {
    let result = new Date( milliseconds *1000);
    let a:any = {timeStyle: 'short'};
    return `${result.toLocaleTimeString([], a)}`
  }

  public unixDate(unix) {
    let result = new Date( unix *1000);
      
    return `${result.toLocaleDateString('br',{month: 'long', day: 'numeric'})}`;
  }

  public unixTime(unix) {
    let result = new Date( unix *1000);
    let a:any = {timeStyle: 'short'};
    return `${result.toLocaleTimeString([], a)}`;
  }

}
