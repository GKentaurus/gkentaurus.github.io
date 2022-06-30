import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  expData = [
    {
      company: 'QPCOM Colombia',
      job: 'Technical Assistant',
      start: 'March 2012',
      end: 'December 2013',
      achievements: [
        'Development of a database for registration and follow-up of equipment under warranty.',
        'Development of a database for registration and follow-up of technical support calls.'
      ]
    },
    {
      company: 'QPCOM Colombia',
      job: 'Sales Executive',
      start: 'January 2014',
      end: 'December 2017',
      achievements: [
        'Development of macros for sales reports by periods.'
      ]
    },
    {
      company: 'QPCOM Colombia',
      job: 'Technical Director',
      start: 'January 2018',
      end: 'November 2020',
      achievements: [
        'Development of macros for late payment reports by clients.',
        'Development of macros for inventory suggestions. ',
        'Basic Intranet implementation.'
      ]
    },
    {
      company: 'EURO DECO',
      job: 'Fullstack Developer',
      start: 'December 2020',
      end: 'May 2021',
      achievements: [
        'API RESTfull develpment in Laravel.',
        'Web page design and development in Angular.'
      ]
    },
    {
      company: 'ScotiaGBS (Scotiabank)',
      job: 'Backend Software Engineer Associate',
      start: 'Mayo 2021',
      end: 'April 2022',
      achievements: [
        'SpringBoot microservices development.',
        'Java batch processing programs development.'
      ]
    },
    {
      company: 'ScotiaGBS (Scotiabank)',
      job: 'Backend Software Engineer Specialist',
      start: 'May 2022',
      end: 'Currently',
      achievements: [
        'Technical desing for multiple new implementations.',
        'Development consultant for developer team members.'
      ]
    }
  ];
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('GKentaurus > Work Experience');
  }

  ngOnDestroy(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
