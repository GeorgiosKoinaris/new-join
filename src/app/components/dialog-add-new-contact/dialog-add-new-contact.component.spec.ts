import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddNewContactComponent } from './dialog-add-new-contact.component';

describe('DialogAddNewContactComponent', () => {
  let component: DialogAddNewContactComponent;
  let fixture: ComponentFixture<DialogAddNewContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddNewContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddNewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
