import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from '../app/page/index/index.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'index', component: IndexComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const appRouting = RouterModule.forRoot(routes);