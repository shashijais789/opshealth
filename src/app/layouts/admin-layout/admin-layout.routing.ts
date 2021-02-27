import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { HealthCardComponent } from '../../pages/health-card/health-card.component';
import { TableComponent } from '../../pages/table/table.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'health-card',    component: HealthCardComponent },
    { path: 'table',          component: TableComponent }
];
