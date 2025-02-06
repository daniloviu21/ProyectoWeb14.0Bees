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
    { label: 'Gestionar', icon: 'add', url: '/user-management' },
    { label: 'Buscar', icon: 'search', url: '/.search' },
 ]

}
