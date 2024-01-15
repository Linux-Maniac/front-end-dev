import { Component, OnInit } from '@angular/core';
import { GetTransactionFeeByChannelNameService } from './services/get-transaction-fee-by-channel-name.service';
import { GetTransactionyChannelName_Req, GetTransactionyChannelName_Resp } from './models/getTransactionByChannelName.model';
//import { TransactionFeeLineChartComponent } from './components/transaction-fee-line-chart/transaction-fee-line-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-chart-poc';

  constructor(private service: GetTransactionFeeByChannelNameService) {

  }
  resp_getTransactionFeeByChannelName: GetTransactionyChannelName_Resp={
    success : true,
    transactionsList : []
  };
  ngOnInit(): void {
    // let req_getTransactionFeeByChannelName = new GetTransactionyChannelName_Req();

    // req_getTransactionFeeByChannelName.channelName = 'RIB';
    // req_getTransactionFeeByChannelName.fromDate = '01/01/2023';
    // req_getTransactionFeeByChannelName.toDate = '31/05/2023';

    // this.service.getTransactionFeeByChannelName(req_getTransactionFeeByChannelName)
    //   .subscribe((response) => {
    //     console.log(`API Resp : ${JSON.stringify(response)}`);
    //     console.log(`API Resp Transaction Fee : ${response.transactions.stringify}`);
    //     //this.resp_getTransactionFeeByChannelName.success=response.success.stringify;
    //     this.resp_getTransactionFeeByChannelName.transactionsList = response.transactions;
    //   })
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

