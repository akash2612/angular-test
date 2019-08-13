import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from '../../shared/services/globalservice.service';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css']
})
export class ViewTransactionComponent implements OnInit {

  constructor(public fetchService:GlobalserviceService) { }

  fetchTransaction:any[] = [];

  ngOnInit() {
    this.fetchService.isVisible = true;
    this.fetchService.fetchTransaction().subscribe(responseData => {
      for(var key in responseData) {
        this.fetchTransaction.push(responseData[key]);
      }
    });

  }

}
