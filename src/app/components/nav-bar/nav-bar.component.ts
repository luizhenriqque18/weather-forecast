import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators'
import { Subject } from 'rxjs/internal/Subject';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ForecastService } from 'src/app/services/forecast.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  subject = new EventEmitter<string>();
  inputSearch: string = '';
  list: Array<Object>;
  header: boolean = true;
  loadStatus: boolean = true;

  constructor(
    private service: ForecastService,
    private route: ActivatedRoute, 
    private router: Router){}

  ngOnInit(): void {
    this.subject.pipe(debounceTime(1000)).subscribe(value => {
      this.loadStatus = false;
      this.getList(value);
    });
    this.router.events.subscribe( (e: NavigationEnd) => {
      if( e instanceof NavigationEnd && e.url){
        if(e.url !== '/'){
          this.header = false;
        }else{
          this.header = true;
        }
      }      
    });
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }

  getList(search: string): void{
    this.service.findUsingGet(search)
    .subscribe(
      (e)=>{ this.service.listCity.next(e);}, 
      error => {this.loadStatus = true; this.service.listCity.next({})},
      () => {this.loadStatus = true}
    );
  }

  public search(evt): void {
    this.inputSearch = evt.target.value
    this.subject.next(this.inputSearch)
  }
}
