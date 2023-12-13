import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddNewContactComponent } from 'src/app/dialog-add-new-contact/dialog-add-new-contact.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  constructor(public dialog: MatDialog) {}

  openDialogToAddContact() {
    this.dialog.open(DialogAddNewContactComponent);
  }
}
