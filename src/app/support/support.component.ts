import { Component } from '@angular/core';
import { GlobalStateService } from '../service/global-state.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

  isOpen: boolean = false;

  constructor(private chatService: GlobalStateService,
    private modalService: NgbModal) {  }

  openChat(): void {
    const modalRef = this.modalService.open('Hi welcome', { centered: true });
    // Do any additional setup for the modal here
  }

  closeChat(modal: any): void {
    modal.close();
  }

}
