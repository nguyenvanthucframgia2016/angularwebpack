import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { EmployeeComponent } from '../employees/employee.component';
import { NotFoundComponent } from '../errors/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'employee',
        component: EmployeeComponent
    },
    // Xay dung trang loi 404
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const routing = RouterModule.forRoot(routes);