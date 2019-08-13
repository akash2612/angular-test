import { Component, OnInit,ViewChild } from '@angular/core';
import { GlobalserviceService } from '../../shared/services/globalservice.service';
import { Customer } from '../../shared/customer/customer.model';
import { Transaction } from 'src/app/shared/transaction/transaction.model';
import { FormGroup,FormControl,Validators, FormGroupDirective } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
  @ViewChild(FormGroupDirective,{static:false}) formRef: FormGroupDirective;

  transactionForm = new FormGroup({
    reference: new FormControl('',[Validators.required]),
    customerInfo: new FormGroup({
      cnumber: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(5),Validators.pattern("^[0-9]*$")]),
      cname: new FormControl({value:'',disabled:true},[Validators.required]),
      address: new FormControl({value:'',disabled:true},[Validators.required]),
      phnumber: new FormControl({value:'',disabled:true},[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9]*$")]),
    }),
    transferamt: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    currency: new FormControl('',[Validators.required]),
    bb: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]),
    baccnum: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(14),Validators.minLength(14)]),
    paydt: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)])
  })

  customerModel:Customer;
  transacModel:Transaction;

  constructor(public transacService: GlobalserviceService,private toast:ToastrService) { }

  ngOnInit() {
    this.transacService.isVisible = true;
    this.referenceGenerator();
  }
  storeData() {
    this.customerModel = new Customer(this.transactionForm.value.customerInfo.cnumber,this.transactionForm.value.customerInfo.cname,this.transactionForm.value.customerInfo.address,this.transactionForm.value.customerInfo.phnumber);
    this.transacModel = new Transaction(this.customerModel,this.transactionForm.value.reference,this.transactionForm.value.transferamt,this.transactionForm.value.currency,this.transactionForm.value.bb,this.transactionForm.value.ban,this.transactionForm.value.paydt);
    this.transacService.postTransaction(this.transacModel).subscribe(res => {
      console.log(res);
      if(res.status == 'success') {
        // this.transactionForm.reset();
        this.toast.success('Transaction submitted successfully!');
        this.formRef.resetForm();
        this.transacService.sqNo += 1;
        this.referenceGenerator();
      }else {
        this.toast.error('Something went wrong!');
      }
    },(err:HttpErrorResponse) => {
      this.toast.error('Network Error!');
    });
  }

  getCustomerInfo() {
    if(String(this.transactionForm.value.customerInfo.cnumber).length == 5) {
      this.transacService.getUserInfo(this.transactionForm.value.customerInfo.cnumber).subscribe(res => {
        if(res.hasOwnProperty('status') == false) {
          this.transactionForm.patchValue({
            customerInfo: {
              cname: res.CUST_INFO.SHORT_NAME,
              address: res.CUST_INFO.STREET_ADDR,
              phnumber: res.CUST_INFO.CONTACT_INFO_V7.CONTACT_INFO_V7.PHONE_LIST_V7.PHONE_LIST_ITEM_V7.PHONE
            }
          })
        }else {
          this.toast.error('Invalid Customer!');
          this.transactionForm.patchValue({
            customerInfo: {
              cname: '',
              address: '',
              phnumber: ''
            }
          })
        }
      },(err:HttpErrorResponse) => {
        this.toast.error('Network Error!');
      })
    }
  }

  dateGetter() {
    var d = new Date(),
        m = ''+(d.getMonth()+1),
        y = ''+d.getFullYear(),
        dt = ''+d.getDate();
    if(m.length<2) {
      m = '0'+m;
    }
    if(dt.length<2) {
      dt = '0'+dt;
    }
    return [y,m,dt].join('');
  }

  referenceGenerator() {
    const cusString = 'CUS';
    var dtString = this.dateGetter();
    this.transactionForm.patchValue({
      reference:cusString+dtString+this.transacService.sqNo
    })
  }

}
