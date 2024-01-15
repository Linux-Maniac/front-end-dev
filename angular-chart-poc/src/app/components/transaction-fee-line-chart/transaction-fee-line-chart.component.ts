import { Component, OnInit, OnDestroy} from '@angular/core';
import { EChartsOption } from 'echarts';
import { Subscription } from 'rxjs';
import { GetTransactionyChannelName_Req } from 'src/app/models/getTransactionByChannelName.model';
import { TransactionFeeDetail } from 'src/app/models/getTransactionByChannelName.model';
import { GetTransactionFeeByChannelNameService } from 'src/app/services/get-transaction-fee-by-channel-name.service';

@Component({
  selector: 'app-transaction-fee-line-chart',
  templateUrl: './transaction-fee-line-chart.component.html',
  styleUrls: ['./transaction-fee-line-chart.component.css']
})
export class TransactionFeeLineChartComponent implements OnInit {
  _chartOption : EChartsOption;
  subscription : Subscription;

  constructor(private service: GetTransactionFeeByChannelNameService) { }

  ngOnInit(): void {
    console.log("Preparing line chart");    
    let req_getTransactionFeeByChannelName = new GetTransactionyChannelName_Req();

    req_getTransactionFeeByChannelName.channelName = 'RIB';
    req_getTransactionFeeByChannelName.fromDate = '01/01/2023';
    req_getTransactionFeeByChannelName.toDate = '31/05/2023';

    this.subscription=this.service.getTransactionFeeByChannelName(req_getTransactionFeeByChannelName)
      .subscribe((response) => {
        console.log(`API Resp : ${JSON.stringify(response)}`);        
        this._initChartTransactionFeeByChannelName(response.transactions);
      });
  }

  private _initChartTransactionFeeByChannelName(chartData : TransactionFeeDetail[]){
    this._chartOption={
      tooltip : {
        show : true,
      },
      background : 'transparent',
      xAxis: {
        type: 'category',
        data: chartData.map(m=>m.transactionType)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: chartData.map(m=>m.totalFee),
          type: 'line'
        }
      ]
    };

  }
}
