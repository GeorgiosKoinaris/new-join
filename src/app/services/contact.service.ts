import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactData!: Observable<any>;
  collectionInstance = collection(this.firestore, 'contacts');

  constructor(private firestore: Firestore) {}

  addContactService(contact: Contact) {
    console.log('New contact is:', contact);

    addDoc(this.collectionInstance, contact.toJSON())
      .then(() => {
        console.log('Contact saved successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getContactService() {
    // collectionData(this.collectionInstance).subscribe((val) => {
    //   console.log(val);
    // });
    this.contactData = collectionData(this.collectionInstance);
  }

  updateContactService() {}
  deleteContactService() {}
}
