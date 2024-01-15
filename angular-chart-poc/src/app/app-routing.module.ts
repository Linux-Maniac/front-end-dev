import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionFeeLineChartComponent } from './components/transaction-fee-line-chart/transaction-fee-line-chart.component';


const routes: Routes = [
  {
    path : 'transaction-fee-line-echart',
    component : TransactionFeeLineChartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
