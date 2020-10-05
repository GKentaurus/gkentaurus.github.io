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
      title: 'Angular 10 Básico/Intermedio',
      platform: 'Udemy.com',
      link: 'https://www.udemy.com/course/angular-2-fernando-herrera/'
    },
    {
      title: 'Universidad Java (JDK 14)',
      platform: 'Udemy.com',
      link:
        'https://www.udemy.com/course/universidad-java-especialista-en-java-desde-cero-a-master/'
    },
    {
      title: 'Fundamentos de Python 3.x',
      platform: 'Udemy.com',
      link:
        'https://www.udemy.com/course/aprende-el-lenguaje-de-programacion-python3-practicando/'
    },
    {
      title: 'API RESTful con Laravel',
      platform: 'Udemy.com',
      link:
        'https://www.udemy.com/course/api-restful-con-laravel-php-homestead-passport/'
    },
    {
      title: 'PHP7 y MySQL',
      platform: 'Udemy.com',
      link: 'https://www.udemy.com/course/php-y-mysql/'
    },
    {
      title: 'Diseño Web con HTML5 - CSS3',
      platform: 'Udemy.com',
      link: 'https://www.udemy.com/course/curso-html5-css3/'
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
