import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: DashboardComponent, children: [
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent }
  ]}
];
