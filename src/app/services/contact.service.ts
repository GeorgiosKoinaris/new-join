import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
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

  deleteContactService() {}
  updateContactService() {}
  readContactService() {}
}
