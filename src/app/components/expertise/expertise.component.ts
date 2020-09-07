import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css'],
})
export class ExpertiseComponent implements OnInit {
  cardData = [
    { title: 'Diseño Front-end', description: 'descripcion' },
    { title: 'JavaScript / TypeScript', description: 'descripcion' },
    { title: 'Angular', description: 'descripcion' },
    { title: 'Programación Orientada a Objetos', description: 'descripcion' },
    { title: 'Java', description: 'descripcion' },
    { title: 'PHP', description: 'descripcion' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
