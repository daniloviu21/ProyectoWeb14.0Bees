import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { ProductManagementComponent } from './pages/product-management/product-management.component';
import { OrderManagementComponent } from './pages/order-management/order-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardPageComponent},
  { path: 'user-management', component: UserManagementComponent},
  { path: 'product-management', component: ProductManagementComponent},
  { path: 'order-management', component: OrderManagementComponent},
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
