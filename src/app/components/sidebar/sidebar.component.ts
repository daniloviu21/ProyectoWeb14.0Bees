import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public sidebarItems = [
    { label: 'Inicio', icon: 'home', url: '/dashboard' },
    {
      label: 'Gestionar',
      icon: 'add',
      children: [
        { label: 'Usuarios', icon: 'person', url: '/users' },
        { label: 'Productos', icon: 'shopping_cart', url: '/products' },
        { label: 'Almacén', icon: 'store', url: '/storage' }
      ],
      expanded: false // Estado para mostrar u ocultar el submenú
    },
    { label: 'Buscar', icon: 'search', url: '/search' }
  ];

  toggleSubmenu(item: any) {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }
}
