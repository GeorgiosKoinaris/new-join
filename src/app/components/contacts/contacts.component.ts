import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddNewContactComponent } from 'src/app/components/dialog-add-new-contact/dialog-add-new-contact.component';
import { DialogEditContactComponent } from 'src/app/components/dialog-edit-contact/dialog-edit-contact.component';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  selectedContact: any;

  constructor(
    public dialog: MatDialog,
    public contactService: ContactService
  ) {}

  ngOnInit() {
    this.contactService.getContactService();
  }

  showContactInfo(contact: any) {
    this.selectedContact = contact;
  }

  openDialogToAddContact() {
    this.dialog.open(DialogAddNewContactComponent);
  }

  openDialogToEditContact() {
    this.dialog.open(DialogEditContactComponent);
  }
}
