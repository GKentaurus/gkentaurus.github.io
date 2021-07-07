import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  expData = [
    {
      company: 'QPCOM Colombia',
      job: 'Asistente técnico',
      start: 'Marzo 2012',
      end: 'Diciembre 2013',
      achievements: [
        'Desarrollo de una base de datos para registro y seguimiento de equipos en garantía.',
        'Desarrollo de una base de datos para registro y seguimiento llamadas de soporte técnico.'
      ]
    },
    {
      company: 'QPCOM Colombia',
      job: 'Ejecutivo de Ventas',
      start: 'Enero 2014',
      end: 'Diciembre 2017',
      achievements: [
        'Desarrollo de macros para informes de ventas por periodos.'
      ]
    },
    {
      company: 'QPCOM Colombia',
      job: 'Director Técnico',
      start: 'Enero 2018',
      end: 'Noviembre 2020',
      achievements: [
        'Desarrollo de macros para informes de cartera.',
        'Desarrollo de macros para sugeridos de inventario.',
        'Implementación de una intranet básica.'
      ]
    },
    {
      company: 'EURO DECO',
      job: 'Desarrollador',
      start: 'Diciembre 2020',
      end: 'Mayo 2021',
      achievements: [
        'Desarrollo de API RESTfull en Laravel.',
        'Diseño y desarrollo de página web.'
      ]
    },
    {
      company: 'ScotiaGBS (Scotiabank)',
      job: 'Senior Analyst Programmer',
      start: 'Mayo 2021',
      end: 'Actualmente',
      achievements: [
        'Desarrollo de aplicaciones en Spring Boot',
        'Desarrollo de aplicaciones batch con Java'
      ]
    }
  ];
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('GKentaurus > Experiencia');
  }

  ngOnDestroy(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
