

export class Customer {
    public custNo: number;
    public custName: string;
    public custAddress: string;
    public custPhn: number;

    constructor(custNo,custName,custAddress,custPhn) {
        this.custNo = custNo;
        this.custName = custName;
        this.custAddress = custAddress;
        this.custPhn = custPhn;
    }
}
