export class GetTransactionyChannelName_Req {
    channelName : string;
    fromDate : string;
    toDate : string;
}

export interface GetTransactionyChannelName_Resp {
    success : boolean;
    transactionsList : TransactionFeeDetail[];
}

export interface TransactionFeeDetail {
    transactionType : string;
    totalFee : string;
    isFeetoCustomer : string;
}

