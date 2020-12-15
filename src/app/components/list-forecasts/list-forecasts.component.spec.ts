import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListForecastsComponent } from './list-forecasts.component';

describe('ListForecastsComponent', () => {
  let component: ListForecastsComponent;
  let fixture: ComponentFixture<ListForecastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListForecastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListForecastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
