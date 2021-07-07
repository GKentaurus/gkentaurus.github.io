import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {
  coursesData = [
    {
      title1: 'Angular 10 ',
      title2: 'Básico/Intermedio',
      platform: 'Udemy.com',
      link: 'https://www.udemy.com/course/angular-2-fernando-herrera/'
    },
    {
      title1: 'Universidad Java',
      title2: '(JDK 14)',
      platform: 'Udemy.com',
      link:
        'https://www.udemy.com/course/universidad-java-especialista-en-java-desde-cero-a-master/'
    },
    {
      title1: 'Fundamentos de',
      title2: 'Python 3.x',
      platform: 'Udemy.com',
      link:
        'https://www.udemy.com/course/aprende-el-lenguaje-de-programacion-python3-practicando/'
    },
    {
      title1: 'API RESTful',
      title2: 'con Laravel 5.x +',
      platform: 'Udemy.com',
      link:
        'https://www.udemy.com/course/api-restful-con-laravel-php-homestead-passport/'
    },
    {
      title1: 'Fundamentos en',
      title2: 'PHP7 y MySQL',
      platform: 'Udemy.com',
      link: 'https://www.udemy.com/course/php-y-mysql/'
    },
    {
      title1: 'Diseño Web',
      title2: 'con HTML5 y CSS3',
      platform: 'Udemy.com',
      link: 'https://www.udemy.com/course/curso-html5-css3/'
    }
  ];
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('GKentaurus > Estudios adicionales');
  }

  ngOnDestroy(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
