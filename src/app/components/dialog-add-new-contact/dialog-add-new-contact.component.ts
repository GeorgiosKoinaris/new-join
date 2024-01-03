import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-dialog-add-new-contact',
  templateUrl: './dialog-add-new-contact.component.html',
  styleUrls: ['./dialog-add-new-contact.component.scss'],
})
export class DialogAddNewContactComponent {
  contact: Contact = new Contact();

  constructor(private contactService: ContactService) {}

  createContact() {
    this.contactService.addContactService(this.contact);
  }
}
