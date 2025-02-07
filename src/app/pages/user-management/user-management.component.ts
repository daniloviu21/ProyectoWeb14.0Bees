import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  standalone: false
})
export class UserManagementComponent {
  displayedColumns: string[] = ['id', 'usuario', 'correo', 'rol', 'acciones'];
  users = [
    { id: 1, usuario: 'Juan', correo: 'juan@example.com', rol: 'Admin' },
    { id: 2, usuario: 'Maria', correo: 'maria@example.com', rol: 'Usuario' },
    { id: 3, usuario: 'Pedro', correo: 'pedro@example.com', rol: 'Editor' },
    { id: 4, usuario: 'Luis', correo: 'luis@example.com', rol: 'Usuario' },
    { id: 5, usuario: 'Ana', correo: 'ana@example.com', rol: 'Admin' },
    { id: 6, usuario: 'Carlos', correo: 'carlos@example.com', rol: 'Editor' },
    { id: 7, usuario: 'Elena', correo: 'elena@example.com', rol: 'Usuario' },
    { id: 8, usuario: 'Miguel', correo: 'miguel@example.com', rol: 'Admin' },
    { id: 9, usuario: 'Sofia', correo: 'sofia@example.com', rol: 'Usuario' },
    { id: 10, usuario: 'Daniel', correo: 'daniel@example.com', rol: 'Editor' },
    { id: 11, usuario: 'Lucia', correo: 'lucia@example.com', rol: 'Admin' },
    { id: 12, usuario: 'Hugo', correo: 'hugo@example.com', rol: 'Usuario' },
    { id: 13, usuario: 'Valeria', correo: 'valeria@example.com', rol: 'Editor' },
    { id: 14, usuario: 'Javier', correo: 'javier@example.com', rol: 'Admin' },
    { id: 15, usuario: 'Paola', correo: 'paola@example.com', rol: 'Usuario' },
    { id: 16, usuario: 'Diego', correo: 'diego@example.com', rol: 'Editor' },
    { id: 17, usuario: 'Fernanda', correo: 'fernanda@example.com', rol: 'Admin' },
    { id: 18, usuario: 'Ricardo', correo: 'ricardo@example.com', rol: 'Usuario' },
    { id: 19, usuario: 'Carmen', correo: 'carmen@example.com', rol: 'Editor' },
    { id: 20, usuario: 'Roberto', correo: 'roberto@example.com', rol: 'Admin' },
    { id: 21, usuario: 'Andrea', correo: 'andrea@example.com', rol: 'Usuario' },
    { id: 22, usuario: 'Victor', correo: 'victor@example.com', rol: 'Editor' },
    { id: 23, usuario: 'Gabriela', correo: 'gabriela@example.com', rol: 'Admin' },
    { id: 24, usuario: 'Raul', correo: 'raul@example.com', rol: 'Usuario' },
    { id: 25, usuario: 'Patricia', correo: 'patricia@example.com', rol: 'Editor' },
    { id: 26, usuario: 'Sergio', correo: 'sergio@example.com', rol: 'Admin' },
    { id: 27, usuario: 'Monica', correo: 'monica@example.com', rol: 'Usuario' },
    { id: 28, usuario: 'Julio', correo: 'julio@example.com', rol: 'Editor' },
    { id: 29, usuario: 'Isabel', correo: 'isabel@example.com', rol: 'Admin' },
    { id: 30, usuario: 'Oscar', correo: 'oscar@example.com', rol: 'Usuario' },
    { id: 31, usuario: 'Beatriz', correo: 'beatriz@example.com', rol: 'Editor' },
    { id: 32, usuario: 'Tomas', correo: 'tomas@example.com', rol: 'Admin' },
    { id: 33, usuario: 'Camila', correo: 'camila@example.com', rol: 'Usuario' },
    { id: 34, usuario: 'Felipe', correo: 'felipe@example.com', rol: 'Editor' },
    { id: 35, usuario: 'Lorena', correo: 'lorena@example.com', rol: 'Admin' },
    { id: 36, usuario: 'Emilio', correo: 'emilio@example.com', rol: 'Usuario' },
    { id: 37, usuario: 'Nadia', correo: 'nadia@example.com', rol: 'Editor' },
    { id: 38, usuario: 'Guillermo', correo: 'guillermo@example.com', rol: 'Admin' },
    { id: 39, usuario: 'Rosa', correo: 'rosa@example.com', rol: 'Usuario' },
    { id: 40, usuario: 'Esteban', correo: 'esteban@example.com', rol: 'Editor' },
    { id: 41, usuario: 'Carolina', correo: 'carolina@example.com', rol: 'Admin' },
    { id: 42, usuario: 'Alfredo', correo: 'alfredo@example.com', rol: 'Usuario' },
    { id: 43, usuario: 'Regina', correo: 'regina@example.com', rol: 'Editor' },
    { id: 44, usuario: 'Manuel', correo: 'manuel@example.com', rol: 'Admin' },
    { id: 45, usuario: 'Natalia', correo: 'natalia@example.com', rol: 'Usuario' },
    { id: 46, usuario: 'Francisco', correo: 'francisco@example.com', rol: 'Editor' },
    { id: 47, usuario: 'Ximena', correo: 'ximena@example.com', rol: 'Admin' },
    { id: 48, usuario: 'Leonardo', correo: 'leonardo@example.com', rol: 'Usuario' },
    { id: 49, usuario: 'Elsa', correo: 'elsa@example.com', rol: 'Editor' },
    { id: 50, usuario: 'Matias', correo: 'matias@example.com', rol: 'Admin' }
  ];
  
  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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