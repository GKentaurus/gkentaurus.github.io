import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationData = [
    {
      title: 'Bachiller Académico',
      institution: 'Instituto San Bernardo De La Salle',
      finished: '2017',
      achievements: [],
    },
    {
      title: 'Técnico en Informática, Programación y Diseño Web',
      institution: 'Instituto OANDES',
      finished: '2011',
      achievements: ['Mejor promedio académico de la promoción.'],
    },
    {
      title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
      institution: 'Servicio Nacional de Aprendizaje - SENA',
      finished: 'Actualmente',
      achievements: [],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
