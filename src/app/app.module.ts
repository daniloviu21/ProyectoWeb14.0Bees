import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { ProductManagementComponent } from './pages/product-management/product-management.component';
import { OrderManagementComponent } from './pages/order-management/order-management.component';
import { LoginComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    DashboardPageComponent,
    UserManagementComponent,
    ProductManagementComponent,
    OrderManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
