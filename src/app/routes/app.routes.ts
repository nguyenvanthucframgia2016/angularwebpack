import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from '../employee/detail/employee-detail.component';
import { EmployeeListComponent } from '../employee/list/employee-list.component';
import { ErrorComponent } from '../errors/error.component';
import { EmployeeDetailOverviewComponent } from '../employee/detail/overview/employee-detail-overview.component';
import { EmployeeDetailProjectComponent } from '../employee/detail/project/employee-detail-project.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeListComponent
    },
    {
        path: 'employee/detail/:id',
        component: EmployeeDetailComponent,
        // Dinh nghia child route
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                component: EmployeeDetailOverviewComponent
            },
            {
                path: 'project',
                component: EmployeeDetailProjectComponent
            }
        ]
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

export const routing = RouterModule.forRoot(routes);

