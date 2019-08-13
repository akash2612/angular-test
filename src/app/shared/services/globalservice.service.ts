import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../transaction/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {
  isLogin:Boolean = false;
  isActive:Boolean = false;
  isVisible:Boolean = false;
  sqNo:number = 0;
  constructor(private http:HttpClient) { }

  authLogin(email: string,password:string) {
    return this.http.get('https://ngdemoapi.getsandbox.com/login');
  }

  fetchTransaction() {
    return this.http.get('https://ngdemoapi.getsandbox.com/getSubmitedTransactions');
  }

  getUserInfo(id:number){
    return this.http.get<any>(`https://ngdemoapi.getsandbox.com/customerById/${id}`);
  }

  postTransaction(transacInfo:Transaction) {
    return this.http.post<any>('https://ngdemoapi.getsandbox.com/saveTransaction',transacInfo);
  }

}
