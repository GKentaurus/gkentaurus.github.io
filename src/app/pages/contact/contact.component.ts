import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  contactData = {
    facebook: {
      show: true,
      link: 'https://www.facebook.com/GKentaurus/'
    },
    twitter: {
      show: true,
      link: 'https://twitter.com/GKentaurus'
    },
    instagram: {
      show: true,
      link: 'https://www.instagram.com/GKentaurus/'
    },
    linkedin: {
      show: true,
      link: 'https://www.linkedin.com/in/camorenoc/'
    },
    github: {
      show: true,
      link: 'https://github.com/GKentaurus/'
    },
    hackerrank: {
      show: true,
      link: 'https://www.hackerrank.com/GKentaurus'
    },
    whatsapp: {
      show: true,
      link: 'https://wa.me/573165378432'
    },
    email: {
      show: true,
      link: 'mailto:gkentaurus@outlook.com'
    },
    skype: {
      show: true,
      link: 'https://join.skype.com/invite/y4ZiL3E4mQxg'
    }
  };
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('GKentaurus > Contact');
  }

  ngOnDestroy(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
