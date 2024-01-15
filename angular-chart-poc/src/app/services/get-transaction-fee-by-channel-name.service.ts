import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetTransactionyChannelName_Req } from '../models/getTransactionByChannelName.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTransactionFeeByChannelNameService {

  constructor(private httpClient : HttpClient) { }

  getTransactionFeeByChannelName(getTransactionFeeByChannelName_Req : GetTransactionyChannelName_Req) : Observable<any>{
    console.log("Trying to fetch transaction fee by POST API call");
    return this.httpClient.post('http://localhost:3030/charts/getTransactionByChannelName',getTransactionFeeByChannelName_Req);
  }
}
