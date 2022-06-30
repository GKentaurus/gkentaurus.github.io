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
      title: 'Computer Science, Development and Web Design Technician',
      institution: 'Instituto OANDES',
      finished: '2008 - 2009',
      achievements: ['Best academic average student']
    },
    {
      title: 'Information Systems Analysis and Development Technologist',
      institution: 'Servicio Nacional de Aprendizaje - SENA',
      finished: '2020 - Actualmente',
      achievements: []
    }
  ];
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('GKentaurus > Main Degrees');
  }

  ngOnDestroy(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
