import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalStockComponent } from './historical-stock.component';

describe('HistoricalStockComponent', () => {
  let component: HistoricalStockComponent;
  let fixture: ComponentFixture<HistoricalStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
