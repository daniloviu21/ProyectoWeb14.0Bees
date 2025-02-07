import { Component } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-product-management',
  standalone: false,
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent {
  displayedColumns: string[] = ['id', 'cliente', 'producto', 'estado', 'acciones'];
  pedidos = [
    { id: 1, cliente: 'Juan Pérez', producto: 'Anuncio Luminoso', estado: 'Pendiente' },
    { id: 2, cliente: 'María López', producto: 'Impresión de Lona', estado: 'En proceso' },
    { id: 3, cliente: 'Pedro Ramírez', producto: 'Tarjetas de presentación', estado: 'Completado' },
    { id: 4, cliente: 'Ana Torres', producto: 'Publicidad en Redes', estado: 'Pendiente' },
    { id: 5, cliente: 'Luis Gómez', producto: 'Letrero LED', estado: 'Pendiente' },
    { id: 6, cliente: 'Elena Ruiz', producto: 'Bordado de Camisas', estado: 'En proceso' },
    { id: 7, cliente: 'Carlos Fernández', producto: 'Diseño de Logotipo', estado: 'Completado' },
    { id: 8, cliente: 'Gabriela Soto', producto: 'Volantes Publicitarios', estado: 'Pendiente' },
    { id: 9, cliente: 'Ricardo Medina', producto: 'Impresión de Carteles', estado: 'En proceso' },
    { id: 10, cliente: 'Fernanda López', producto: 'Rotulación de Vehículo', estado: 'Pendiente' },
    { id: 11, cliente: 'Javier Morales', producto: 'Impresión 3D', estado: 'Completado' },
    { id: 12, cliente: 'Patricia Castro', producto: 'Lonas Publicitarias', estado: 'Pendiente' },
    { id: 13, cliente: 'Hugo Vázquez', producto: 'Viniles Decorativos', estado: 'En proceso' },
    { id: 14, cliente: 'Rosa Herrera', producto: 'Publicidad en Radio', estado: 'Pendiente' },
    { id: 15, cliente: 'Óscar Domínguez', producto: 'Playeras Personalizadas', estado: 'Completado' },
    { id: 16, cliente: 'Valeria Ortega', producto: 'Stickers Empresariales', estado: 'Pendiente' },
    { id: 17, cliente: 'Miguel Rojas', producto: 'Espectacular Publicitario', estado: 'En proceso' },
    { id: 18, cliente: 'Diana Salazar', producto: 'Diseño de Flyers', estado: 'Pendiente' },
    { id: 19, cliente: 'Alejandro Núñez', producto: 'Serigrafía de Gorras', estado: 'Completado' },
    { id: 20, cliente: 'Mónica Estrada', producto: 'Banner Publicitario', estado: 'Pendiente' },
    { id: 21, cliente: 'Roberto García', producto: 'Impresión de Gigantografía', estado: 'Pendiente' },
    { id: 22, cliente: 'Lucía Ramírez', producto: 'Carpetas Corporativas', estado: 'En proceso' },
    { id: 23, cliente: 'Emilio Gutiérrez', producto: 'Rótulos Adhesivos', estado: 'Completado' },
    { id: 24, cliente: 'Paola Mendoza', producto: 'Pendón Publicitario', estado: 'Pendiente' }
];

  
  dataSource = new MatTableDataSource(this.pedidos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openModal() {
    console.log('Abrir modal para crear pedido');
  }

  editarPedido(id: number) {
    console.log('Editar pedido con ID:', id);
  }

  eliminarPedido(id: number) {
    console.log('Eliminar pedido con ID:', id);
  }
}
