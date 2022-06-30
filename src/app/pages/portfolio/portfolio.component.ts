import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  portfolioData = [
    {
      title: 'Prestashop\'s PayU Latam online payment module',
      image: '../../../assets//images/payu_logo.png',
      language: 'PHP, HTML5, CSS3, JS',
      link: 'https://bitbucket.org/GKentaurus/mtspayuapi_v1.6/src/master/',
      description:
        'This module allows the e-commerce owner to give end customers the option to pay for their orders with multiple online payment methods, such as credit card, bank transfer or cash deposit.'
    },
    {
      title: 'Prestashop\'s Allegra electronic billing module',
      image: '../../../assets//images/alegra_logo.png',
      language: 'PHP, HTML5, CSS3, JS',
      link: 'https://bitbucket.org/GKentaurus/mtsallegraapi/src/master/',
      description:
        'This module allows you to send the necessary information to create a new customer, product, update the inventory warehouse and register a sales invoice to be sent electronically.'
    }
  ];

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('GKentaurus > Portfolio');
  }

  ngOnDestroy(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
