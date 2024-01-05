import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  updateDoc,
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
    addDoc(this.collectionInstance, contact.toJSON())
      .then((docRef) => {
        const contactId = docRef.id;
        const updatedData = { contactId };

        const docInstance = doc(this.firestore, 'contacts', contactId);
        updateDoc(docInstance, updatedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getContactService() {
    this.contactData = collectionData(this.collectionInstance);
  }

  updateContactService() {}
  deleteContactService() {}
}
