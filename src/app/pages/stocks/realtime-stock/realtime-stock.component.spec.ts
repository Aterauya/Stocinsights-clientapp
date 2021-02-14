import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeStockComponent } from './realtime-stock.component';

describe('RealtimeStockComponent', () => {
  let component: RealtimeStockComponent;
  let fixture: ComponentFixture<RealtimeStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtimeStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
