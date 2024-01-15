import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFeeLineChartComponent } from './transaction-fee-line-chart.component';

describe('TransactionFeeLineChartComponent', () => {
  let component: TransactionFeeLineChartComponent;
  let fixture: ComponentFixture<TransactionFeeLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionFeeLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFeeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
