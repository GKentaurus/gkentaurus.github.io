import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css'],
})
export class ExpertiseComponent implements OnInit {
  cardData = [
    {
      title: 'Trabajo en equipo',
      description:
        'Excelente comunicación, coordinación y sinergia con los demás integrantes del equipo, para llevar a cabo los proyectos impuestos.',
    },
    {
      title: 'Mentor',
      description:
        'Gran capacidad de exponer y explicar temáticas básicas y complejas, para el entendimiento de los demás, con el fin de avanzar como equipo.',
    },
    {
      title: 'Ordenado',
      description:
        'Para un mayor entendimiento, escalabilidad y mantenimiento en los proyectos, me gusta mantener un orden que pueda ser práctico y útil para todos.',
    },
    {
      title: 'Aprendizaje',
      description:
        'Soy autodidacta y de constante actualización de información. Me gusta estar al tanto de las tendencias de desarrollo, para ofrecer mejores soluciones.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
