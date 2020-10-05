import { Component, OnInit } from '@angular/core';
import { MenuOptionsService } from '../../../services/menu-options.service';
declare var $: any;

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbarLeft.component.html',
  styleUrls: ['./navbarLeft.component.css']
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
    // $('.sidenav > ul').hide();
    setTimeout(() => {
      // $('.sidenav > ul').fadeIn();
      const height = $('.sidenav').height() / 2;
      this.menuStyle.top = `calc(50% - ${height}px)`;
    }, 50);
  }

  mouseEnterItem(id: string): void {
    $('.menu-item').addClass('reduce');
    $(`#${id}`)
      .removeClass('reduce')
      .addClass('zoom');
  }

  mouseLeaveItem(): void {
    $(`.menu-item`).removeClass('reduce zoom');
  }

  removeClass(): void {
    $('.menuList > a').removeClass('reduce zoom');
  }

  hideMenu(): void {
    $('.bg-shadow').fadeOut();
    $('.menuList.responsive').fadeOut();
    $('.show-button').show();
    $('.hide-button').hide();
  }

  showMenu(): void {
    $('.bg-shadow').fadeIn();
    $('.menuList.responsive').fadeIn();
    $('.show-button').hide();
    $('.hide-button').show();
  }
}
