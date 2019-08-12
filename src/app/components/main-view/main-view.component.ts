import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from '../../shared/services/globalservice.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(private authCheck:GlobalserviceService) { }

  ngOnInit() {
    this.authCheck.isVisible = false;
    
  }

}
