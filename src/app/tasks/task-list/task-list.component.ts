import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule, RouterModule], // Add RouterModule and Material Modules
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Complete project', description: 'Finish Angular task manager' },
    { id: 2, title: 'Review PRs', description: 'Check and merge pull requests' }
  ];
}
