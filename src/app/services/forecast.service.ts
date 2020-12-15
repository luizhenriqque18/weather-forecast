import { EventEmitter, Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  public pathUrl = `${environment.url}`;
  public appId = `${environment.appId}`;
  public listCity: BehaviorSubject<any> = new BehaviorSubject([]);

  public findUsingGet(search: string): Observable<any> {

    let params = new HttpParams();
    params = params.append('q', search);
    params = params.append('units', 'metric');
    params = params.append('appid', this.appId);
    return this.http.get(`${this.pathUrl}/find`, {params: params});
  }

  public weatherUsingGet(id: string): Observable<any> {

    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('units', 'metric');
    params = params.append('appid', this.appId);
    return this.http.get(`${this.pathUrl}/weather`, {params: params});
  }

  public forecastUsingGet(weather: any): Observable<any> {

    let { name, sys: {country}} = weather;
    
    let params = new HttpParams();
    params = params.append('q', `${name},${country}`);
    params = params.append('units', 'metric');
    params = params.append('appid', this.appId);
    return this.http.get(`${this.pathUrl}/forecast`, {params: params});
  }

 /*
*/
}
