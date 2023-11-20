import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { BoardComponent } from './components/board/board.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'addTask', component: AddTaskComponent },
  { path: 'board', component: BoardComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
