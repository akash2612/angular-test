import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from './shared/services/globalservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  constructor(public globalService:GlobalserviceService) {}
  ngOnInit() {
  }
}
