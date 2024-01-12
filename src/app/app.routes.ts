import { Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { PaymentsComponent } from './payments/payments.component';
import { SupportComponent } from './support/support.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'account', component: AccountsComponent },
  { path: 'payment', component: PaymentsComponent },
  { path: 'support', component: SupportComponent },
  { path: '**', component: PageNotFoundComponent }
];
