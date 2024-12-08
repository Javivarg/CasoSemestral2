import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-asignatura',
  templateUrl: './vista-asignatura.page.html',
  styleUrls: ['./vista-asignatura.page.scss'],
})
export class VistaAsignaturaPage implements OnInit {
  sigla: string = '';
  nombre: string = '';
  seccion: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sigla = params['sigla'];
      this.nombre = params['nombre'];
      this.seccion = params['seccion'];
    });
  }
}
