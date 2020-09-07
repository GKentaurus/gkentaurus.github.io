import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbarLeft.component.html',
  styleUrls: ['./navbarLeft.component.css'],
})
export class NavbarLeftComponent implements OnInit {
  menuOptions = [
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
      show: true,
    },
    {
      title: 'Portafolio',
      id: 'portafolio',
      show: true,
    },
    {
      title: 'Clientes',
      id: 'clientes',
      show: true,
    },
    {
      title: 'Contacto',
      id: 'contacto',
      show: true,
    },
  ];

  menuStyle = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    'z-index': 10,
  };
  windowHeight: number;
  constructor() {}

  ngOnInit(): void {
    $('.sidenav').hide();
    setTimeout(() => {
      $('.sidenav').fadeIn();
      const height = $('.menuList').height() / 2;
      this.menuStyle.top = `calc(50% - ${height}px)`;
    }, 50);
  }

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
