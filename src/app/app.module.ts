import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { ViewTransactionComponent } from './components/view-transaction/view-transaction.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { RoutingModule } from './routing.module';
import { AuthGuard } from './auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { MenuDirective, CharacterDirective } from './shared/directives/custom.directive';
import { LogoutModalComponent } from './components/common/logout-modal/logout-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NumberDirective } from './shared/directives/custom.directive';
import { NgxLoadingModule,ngxLoadingAnimationTypes } from 'ngx-loading';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainViewComponent,
    NewTransactionComponent,
    ViewTransactionComponent,
    MenuDirective,
    LogoutModalComponent,
    NumberDirective,
    CharacterDirective
  ],
  imports: [
    BrowserModule,
    // MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    RoutingModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.8)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[LogoutModalComponent]
})
export class AppModule { }
