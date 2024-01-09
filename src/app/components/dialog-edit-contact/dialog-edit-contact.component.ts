import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-dialog-edit-contact',
  templateUrl: './dialog-edit-contact.component.html',
  styleUrls: ['./dialog-edit-contact.component.scss'],
})
export class DialogEditContactComponent {
  selectedContact: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogEditContactComponent>,
    public contactService: ContactService
  ) {
    this.selectedContact = this.data.selectedContact;
  }

  saveContact(contactId: string) {
    const updatedData = {
      firstName: this.selectedContact.firstName,
      lastName: this.selectedContact.lastName,
      email: this.selectedContact.email,
      phone: this.selectedContact.phone,
    };

    this.contactService.updateContactService(contactId, updatedData);
  }

  deleteContact(contactId: string) {
    this.contactService.deleteContactService(contactId);
    this.dialogRef.close(null);
  }
}
