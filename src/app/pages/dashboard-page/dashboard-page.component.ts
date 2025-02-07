import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  standalone: false,
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  registros: number;
    inicios: number;
    visitas: number;

    constructor() {
        this.registros = 10;
        this.inicios = 20;
        this.visitas = 30;
    }
}
