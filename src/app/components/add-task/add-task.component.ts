import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  dateFilter = (d: Date | null): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Setzt die Stunden, Minuten, Sekunden und Millisekunden auf 0 für den Vergleich.

    // Filtert alle vergangenen Tage aus.
    return !!d && d >= today;
  };
}
