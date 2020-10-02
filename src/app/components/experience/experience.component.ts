import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  expData = [
    {
      company: 'QPCOM Colombia',
      job: 'Asistente técnico',
      start: 'Marzo 2012',
      end: 'Diciembre 2013',
      achievements: [
        'Desarrollo de una base de datos para registro y seguimiento de equipos en garantía.',
        'Desarrollo de una base de datos para registro y seguimiento llamadas de soporte técnico.',
      ],
    },
    {
      company: 'QPCOM Colombia',
      job: 'Ejecutivo de Ventas',
      start: 'Enero 2014',
      end: 'Diciembre 2017',
      achievements: [
        'Desarrollo de macros para informes de ventas por periodos.',
      ],
    },
    {
      company: 'QPCOM Colombia',
      job: 'Director Técnico',
      start: 'Enero 2018',
      end: 'Actualmente',
      achievements: [
        'Desarrollo de macros para informes de cartera.',
        'Desarrollo de macros para sugeridos de inventario.',
        'Implementación de una intranet básica.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
