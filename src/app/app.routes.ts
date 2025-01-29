import { Routes } from '@angular/router';
import { authGuard } from './guards/auth/auth.guard';
import { FinancesComponent } from './pages/finances/finances.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "finances", component: FinancesComponent, canActivate: [authGuard]},
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];
