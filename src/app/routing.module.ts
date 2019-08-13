import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { ViewTransactionComponent } from './components/view-transaction/view-transaction.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainViewComponent,canActivate:[AuthGuard] },
  { path: 'viewtransaction', component: ViewTransactionComponent,canActivate:[AuthGuard] },
  { path: 'newtransaction', component: NewTransactionComponent,canActivate:[AuthGuard] },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash:false})
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
