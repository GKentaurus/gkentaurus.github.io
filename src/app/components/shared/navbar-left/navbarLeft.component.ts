import { Component, OnInit } from '@angular/core';
import { MenuOptionsService } from '../../../services/menu-options.service';
declare var $: any;

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbarLeft.component.html',
  styleUrls: ['./navbarLeft.component.css'],
})
export class NavbarLeftComponent implements OnInit {
  menuOptions: any[];

  menuStyle: any;
  windowHeight: number;
  constructor(private menu: MenuOptionsService) {
    this.menuOptions = this.menu.options;
    this.menuStyle = this.menu.style;
  }

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
