import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list';
import { EmployeeFormComponent } from './components/employee-form/employee-form';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail';
import { NotFoundComponent } from './components/not-found/not-found';


export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
   { path: 'employees/add', component: EmployeeFormComponent },
  { path: 'employees/edit/:id', component: EmployeeFormComponent },
  { path: 'employees/detail/:id', component: EmployeeDetailComponent },
  { path: '**', component: NotFoundComponent }
];