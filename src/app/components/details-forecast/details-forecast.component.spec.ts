import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsForecastComponent } from './details-forecast.component';

describe('DetailsForecastComponent', () => {
  let component: DetailsForecastComponent;
  let fixture: ComponentFixture<DetailsForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
