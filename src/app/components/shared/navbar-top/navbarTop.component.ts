import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbarTop.component.html',
  styleUrls: ['./navbarTop.component.css'],
})
export class NavbarTopComponent implements OnInit {
  menuOptions = [
    {
      title: 'Inicio',
      id: 'inicio',
      anchor: '#',
      show: true,
    },
    {
      title: 'Perfil',
      id: 'perfil',
      anchor: '#',
      show: true,
    },
    {
      title: 'Pericia',
      id: 'pericia',
      anchor: '#',
      show: true,
    },
    {
      title: 'Habilidades',
      id: 'habilidades',
      anchor: '#',
      show: true,
    },
    {
      title: 'Experiencia',
      id: 'experiencia',
      anchor: '#',
      show: true,
    },
    {
      title: 'Educación',
      id: 'educacion',
      anchor: '#',
      show: true,
    },
    {
      title: 'Perfiles',
      id: 'perfiles',
      anchor: '#',
      show: true,
    },
    {
      title: 'Portafolio',
      id: 'portafolio',
      anchor: '#',
      show: true,
    },
    {
      title: 'Clientes',
      id: 'clientes',
      anchor: '#',
      show: true,
    },
    {
      title: 'Contacto',
      id: 'contacto',
      anchor: '#',
      show: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  mouseEnterItem(id: string): void {
    $('.menu-item').addClass('reduce');
    $(`#${id}`).removeClass('reduce').addClass('zoom');
  }

  mouseLeaveItem(): void {
    $(`.menu-item`).removeClass('reduce zoom');
  }

  removeClass(): void {
    $('#menu > a').removeClass('reduce zoom');
  }
}
