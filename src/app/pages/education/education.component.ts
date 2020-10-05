import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, OnDestroy {
  educationData = [
    {
      title: 'Técnico en Informática, Programación y Diseño Web',
      institution: 'Instituto OANDES',
      finished: '2008 - 2009',
      achievements: ['Mejor promedio académico de la promoción.']
    },
    {
      title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
      institution: 'Servicio Nacional de Aprendizaje - SENA',
      finished: '2020 - Actualmente',
      achievements: []
    }
  ];
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('GKentaurus > Contacto');
  }

  ngOnDestroy(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
