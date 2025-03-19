import { provideRouter,Routes } from '@angular/router';
export const routes: Routes = [
    {path:'',redirectTo:'tasks',pathMatch:'full'},
    {path:'tasks',loadChildren:()=>import('./tasks/routes').then(m=>m.TASKS_ROUTES)},
    {path:'admin',loadChildren:()=>import('./admin/routes').then(m=>m.ADMIN_ROUTES)},
    {path:'auth',loadChildren:()=>import('./auth/routes').then(m=>m.AUTH_ROUTES)}
];
