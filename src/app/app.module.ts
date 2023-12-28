import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { BoardComponent } from './components/board/board.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HelpUserComponent } from './components/help-user/help-user.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { DialogAddTaskComponent } from './components/dialog-add-task/dialog-add-task.component';
import { DialogAddNewContactComponent } from './components/dialog-add-new-contact/dialog-add-new-contact.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogEditContactComponent } from './components/dialog-edit-contact/dialog-edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    BoardComponent,
    SidenavComponent,
    HeaderComponent,
    SummaryComponent,
    ContactsComponent,
    LoginComponent,
    HelpUserComponent,
    LegalNoticeComponent,
    PrivacyPolicyComponent,
    DialogAddTaskComponent,
    DialogAddNewContactComponent,
    DialogEditContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
