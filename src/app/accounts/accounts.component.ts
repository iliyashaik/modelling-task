import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { internationalPayments } from '../types/appState.types';
import { GlobalStateService } from '../service/global-state.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {
  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: GlobalStateService) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      // TODO: Need to add more validations to the form.
      IBAN: [''],
      SWIFT: [''],
    });
  }

  handleKeyUpEvent() {
    this.accountForm.controls['IBAN'].valueChanges.subscribe(change => {
      this.accountForm.controls['SWIFT'].disable();
      setTimeout(() => {
        if(change === '1234'){
          this.accountForm.controls['SWIFT'].setValue('1234');
        }
        this.accountForm.controls['SWIFT'].enable();
      }, 3000);
    });
  }

  onSubmit() {
    const {IBAN, SWIFT} = this.accountForm.value
    if (!IBAN || !SWIFT) {
      return alert('Incorrect details of account');
    }

    const details = { IBAN: IBAN, SWIFT: SWIFT }
    this.service.updateGlobalState(details)
    this.router.navigate(['/support']);
  }



}
