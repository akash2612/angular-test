import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from '../../../shared/services/globalservice.service';
import { Router } from '@angular/router';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: GlobalserviceService,private router: Router,private dialog: MatDialog) { }

  // isAuth:Boolean = this;

  ngOnInit() {
  }
  logoutFunc() {
    let dialogRef = this.dialog.open(LogoutModalComponent, {
    })
    dialogRef.afterClosed().subscribe(res => {
      if(res == true) {
        this.authService.isLogin = false;
        this.router.navigate(['/login']);
        sessionStorage.removeItem('loginSession');
      }
    })
  }

}
