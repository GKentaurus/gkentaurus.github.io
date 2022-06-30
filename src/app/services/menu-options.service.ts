import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuOptionsService {
  options = [
    {
      title: 'Home',
      id: 'home',
      link: '/',
      show: true
    },
    {
      title: 'Profile',
      id: 'profile',
      link: '/profile',
      show: true
    },
    {
      title: 'Expertise',
      id: 'expertise',
      link: 'expertise',
      show: true
    },
    {
      title: 'Skills',
      id: 'skills',
      link: 'skills',
      show: true
    },
    {
      title: 'Experience',
      id: 'experience',
      link: 'experience',
      show: true
    },
    {
      title: 'Portfolio',
      id: 'portfolio',
      link: 'portfolio',
      show: true
    },
    {
      title: 'Courses',
      id: 'courses',
      link: 'courses',
      show: true
    },
    {
      title: 'Education',
      id: 'education',
      link: 'education',
      show: true
    },
    {
      title: 'Clients',
      id: 'clients',
      link: 'clients',
      show: false
    },
    {
      title: 'Contact',
      id: 'contact',
      link: 'contact',
      show: true
    }
  ];

  style = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    'z-index': 10
  };

  menuStyle = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    'z-index': 10
  };
  constructor() {}
}
