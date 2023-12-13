import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddTaskComponent } from 'src/app/dialog-add-task/dialog-add-task.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogAddTaskComponent);
  }
}
