import { Customer } from "../customer/customer.model";

export class Transaction {
    public custInfo: Customer;
    public transRef: string;
    public transAmt: number;
    public transCurr: string;
    public benefBank: string;
    public benefAcc: string;
    public payDt: string;

    constructor(custInfo:Customer,transRef:string,transAmt:number,transCurr:string,benefBank:string,benefAcc:string,payDt:string) {
        this.custInfo = custInfo;
        this.transRef = transRef;
        this.transAmt = transAmt;
        this.transCurr = transCurr;
        this.benefBank = benefBank;
        this.benefAcc = benefAcc;
        this.payDt = payDt;
    }
}
