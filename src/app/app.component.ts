import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  constructor(private loader: NgxSpinnerService) {}
  ngOnInit() {
    this.loader.show();

    setTimeout(() => {
      this.loader.hide();
    }, 1500);
  }
}
