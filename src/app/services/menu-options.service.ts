import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuOptionsService {
  options = [
    {
      title: 'Inicio',
      id: 'inicio',
      link: '/',
      show: true
    },
    {
      title: 'Perfil',
      id: 'perfil',
      link: '/profile',
      show: true
    },
    {
      title: 'Pericia',
      id: 'pericia',
      link: 'expertise',
      show: true
    },
    {
      title: 'Habilidades',
      id: 'habilidades',
      link: 'skills',
      show: true
    },
    {
      title: 'Experiencia',
      id: 'experiencia',
      link: 'experience',
      show: true
    },
    {
      title: 'Portafolio',
      id: 'portfolio',
      link: 'portfolio',
      show: false
    },
    {
      title: 'Cursos',
      id: 'cursos',
      link: 'courses',
      show: true
    },
    {
      title: 'Educación',
      id: 'educacion',
      link: 'education',
      show: true
    },
    {
      title: 'Clientes',
      id: 'clientes',
      link: 'clients',
      show: false
    },
    {
      title: 'Contacto',
      id: 'contacto',
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
