import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
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
      title: 'Java 8',
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
  constructor() {}

  ngOnInit(): void {}
}
