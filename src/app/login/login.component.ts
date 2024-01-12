import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalStateService } from '../service/global-state.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: GlobalStateService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // TODO: Need to add more validations to the form.
      Email: [''],
      password: [''],
    });
  }

  login() {
    const { Email, password } = this.loginForm.value;
    if (!Email || !password) {
      alert("Please enter valid email and password");
      this.loginForm.reset();
    }
    this.service.login(Email, password).subscribe(response => {
      if (!response) {
        this.router.navigate(['/**']);
        return;
      }
      const store = { email: Email, password: password, name: 'Yusuf',
      accountType: { type: 'REGULAR', IBAN: '12345', currency: 'DKK' } }
      this.service.updateGlobalState(store)
      // this.globalState = { email: Email, password: password }
      // If the user is authenticated redirect him 🤪
      this.router.navigate(['/account']);
    }, (error) => {
      // Handle error message
      this.error = error;
    }
    );
  }
}
