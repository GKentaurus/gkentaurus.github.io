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
      title: 'HTML5',
      percent: 80
    },
    {
      title: 'CSS3',
      percent: 60
    },
    {
      title: 'Bootstrap 4+',
      percent: 60
    },
    {
      title: 'JQuery 3',
      percent: 40
    },
    {
      title: 'JavaScript / TypeScript ES5+',
      percent: 80
    },
    {
      title: 'Angular 10+',
      percent: 60
    },
    {
      title: 'ReactJs',
      percent: 20
    },
    {
      title: 'PHP',
      percent: 80
    },
    {
      title: 'Laravel',
      percent: 60
    },
    {
      title: 'MySQL',
      percent: 60
    },
    {
      title: 'Visual Basic',
      percent: 40
    },
    {
      title: 'Java',
      percent: 60
    },
    {
      title: 'Python',
      percent: 20
    },
    {
      title: 'GIT',
      percent: 40
    }
  ];
  constructor(private title: Title) {}

  toogle(): void {
    this.state = !this.state;
    console.log(this.state);
  }

  ngOnInit(): void {
    this.title.setTitle('GKentaurus > Habilidades');
  }

  ngOnDestroy(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
