import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentsComponent } from './payments/payments.component';
import { SupportComponent } from './support/support.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            AccountsComponent,
            LoginComponent,
            PageNotFoundComponent ,
            PaymentsComponent,
            SupportComponent,
            RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'modelling-task';
}
