import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { state } from '../types/appState.types';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private globalState: state = {
    email: '',
    password: '',
    name: '',
    accountType: {
      type: 'REGULAR',
      IBAN: '',
      curreny: 'DKK'
    },
    payment: {
      IBAN: '',
      SWIFT: ''
    }
  };
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private isChatOpen: boolean = false;

  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    if (!email || !password) {
      return this.isAuthenticated.asObservable();
    }

    this.isAuthenticated.next(true);
    return this.isAuthenticated.asObservable();
    //Handle Error her with http client
    catchError((error) => {
      return throwError(this.handleAuthError(error));
    })

  }

  handleAuthError(error: string): string {
    if (error) {
      return 'Network error. Please check your internet connection.';
    } else {
      return 'Server error. Please try again later.';
    }
  }

  updateGlobalState(newState: any) {
    this.globalState = { ...this.globalState, ...newState };
  }

  getIsOpen(): boolean {
    return this.isChatOpen;
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }
}
