export class Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  contactId: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.email = obj ? obj.email : '';
    this.phone = obj ? obj.phone : '';
    this.contactId = obj ? obj.contactId : null;
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      contactId: this.contactId,
    };
  }
}
