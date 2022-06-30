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
      title2: 'Basic/Intermediate',
      platform: 'Udemy.com',
      link: 'https://www.udemy.com/course/angular-2-fernando-herrera/'
    },
    {
      title1: 'Java University',
      title2: '(JDK 14)',
      platform: 'Udemy.com',
      link:
        'https://www.udemy.com/course/universidad-java-especialista-en-java-desde-cero-a-master/'
    },
    {
      title1: 'Python 3.x',
      title2: 'Fundamentals',
      platform: 'Udemy.com',
      link:
        'https://www.udemy.com/course/aprende-el-lenguaje-de-programacion-python3-practicando/'
    },
    {
      title1: 'API RESTful',
      title2: 'with Laravel 5.x +',
      platform: 'Udemy.com',
      link:
        'https://www.udemy.com/course/api-restful-con-laravel-php-homestead-passport/'
    },
    {
      title1: 'PHP7 y MySQL',
      title2: 'Fundamentals',
      platform: 'Udemy.com',
      link: 'https://www.udemy.com/course/php-y-mysql/'
    },
    {
      title1: 'Web Design',
      title2: 'with HTML5 and CSS3',
      platform: 'Udemy.com',
      link: 'https://www.udemy.com/course/curso-html5-css3/'
    }
  ];
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('GKentaurus > Additional Studies');
  }

  ngOnDestroy(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
