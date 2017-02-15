import { Routes, RouterModule } from '@angular/router';

import { EmployeeAddComponent } from '../employees/add/employee-add.component';
import { EmployeeListComponent } from '../employees/list/employee-list.component';
import { EmployeeDeleteComponent } from '../employees/delete/employee-delete.component';
import { EmployeeEditComponent } from '../employees/edit/employee-edit.component';
import { NotFoundComponent } from '../errors/not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'employee/list',
        pathMatch: 'full'
    },
    {
        path: 'employee/list',
        component: EmployeeListComponent
    },
    {
        path: 'employee/add',
        component: EmployeeAddComponent
    },
    {
        path: 'employee/delete/:id',
        component: EmployeeDeleteComponent
    },
    {
        path: 'employee/edit/:id',
        component: EmployeeEditComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const routing = RouterModule.forRoot(routes);