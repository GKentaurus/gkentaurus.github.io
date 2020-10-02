import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuOptionsService {
  options = [
    {
      title: 'Inicio',
      id: 'inicio',
      show: true,
    },
    {
      title: 'Perfil',
      id: 'perfil',
      show: true,
    },
    {
      title: 'Pericia',
      id: 'pericia',
      show: true,
    },
    {
      title: 'Habilidades',
      id: 'habilidades',
      show: true,
    },
    {
      title: 'Experiencia',
      id: 'experiencia',
      show: true,
    },
    {
      title: 'Educación',
      id: 'educacion',
      show: true,
    },
    {
      title: 'Perfiles',
      id: 'perfiles',
      show: false,
    },
    {
      title: 'Portafolio',
      id: 'portafolio',
      show: false,
    },
    {
      title: 'Clientes',
      id: 'clientes',
      show: false,
    },
    {
      title: 'Contacto',
      id: 'contacto',
      show: true,
    },
  ];

  style = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    'z-index': 10,
  };

  menuStyle = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    'z-index': 10,
  };
  constructor() {}
}
