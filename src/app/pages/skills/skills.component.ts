import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { progressBars } from '../../components/shared/animations/progress-bars';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [progressBars]
})
export class SkillsComponent implements OnInit, OnDestroy {
  state = false;
  skillData = [
    {
      title: 'Java',
      percent: 95
    },
    {
      title: 'Spring Boot Framework',
      percent: 95
    },
    {
      title: 'SQL',
      percent: 75
    },
    {
      title: 'Git',
      percent: 90
    },
    {
      title: 'PHP',
      percent: 80
    },
    {
      title: 'Laravel',
      percent: 75
    },
    {
      title: 'Python',
      percent: 75
    },
    {
      title: 'HTML5',
      percent: 90
    },
    {
      title: 'CSS3',
      percent: 90
    },
    {
      title: 'Bootstrap 4+',
      percent: 75
    },
    {
      title: 'JavaScript / TypeScript ES5+',
      percent: 90
    },
    {
      title: 'Angular 10',
      percent: 75
    },
    {
      title: 'ReactJs',
      percent: 30
    },
    {
      title: 'Visual Basic',
      percent: 40
    },
    {
      title: 'Shell Commands',
      percent: 40
    }
  ];
  constructor(private title: Title) {}

  toogle(): void {
    this.state = !this.state;
    console.log(this.state);
  }

  ngOnInit(): void {
    this.title.setTitle('GKentaurus > Skills');
  }

  ngOnDestroy(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
