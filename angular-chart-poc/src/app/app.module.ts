import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetTransactionFeeByChannelNameService } from './services/get-transaction-fee-by-channel-name.service';
import {NgxEchartsModule} from 'ngx-echarts';
import { TransactionFeeLineChartComponent } from './components/transaction-fee-line-chart/transaction-fee-line-chart.component';

@NgModule({
  declarations: [
    AppComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule,    
  ],
  providers: [GetTransactionFeeByChannelNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
