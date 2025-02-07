import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public sidebarItems = [
    { label: 'Inicio', icon: 'label', url: '/dashboard' },
    { label: 'Gestionar usuarios', icon: 'add', url: '/user-management' },
    { label: 'Gestionar productos', icon: 'add', url: '/product-management' },
    { label: 'Gestionar pedidos', icon: 'add', url: '/order-management' },
    { label: 'Salir', icon: 'logout', url: '/login' },
 ]

}
