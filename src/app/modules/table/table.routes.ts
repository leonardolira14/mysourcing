import { Routes } from '@angular/router';
import { TableComponent } from './table.component';

const ROUTES_TABLE: Routes = [
  {
    path: '',
    component: TableComponent,
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./table.module').then((m) => m.TableModule)
      }
    ]
  }
];
export default ROUTES_TABLE;
