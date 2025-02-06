import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  standalone: false,
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
// Columnas a mostrar en la tabla
  displayedColumns: string[] = ['id', 'usuario', 'correo', 'rol', 'acciones'];

  // Datos de ejemplo
  users = [
    { id: 1, usuario: 'Juan', correo: 'juan@example.com', rol: 'Admin' },
    { id: 2, usuario: 'Maria', correo: 'maria@example.com', rol: 'Usuario' },
    { id: 3, usuario: 'Pedro', correo: 'pedro@example.com', rol: 'Editor' },
  ];

  // Métodos para acciones
  openModal() {
    console.log('Abrir modal para crear usuario');
  }

  editarUsuario(id: number) {
    console.log('Editar usuario con ID:', id);
  }

  eliminarUsuario(id: number) {
    console.log('Eliminar usuario con ID:', id);
  }
}
