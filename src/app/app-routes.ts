import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ViewsComponent } from './views/views.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { GraphicsOneComponent } from './views/graphics-one/graphics-one.component';
import { ProgressComponent } from './views/progress/progress.component';


const APP_ROUTES: Routes = [
  {
    path: '', component: ViewsComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphics-one', component: GraphicsOneComponent },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
