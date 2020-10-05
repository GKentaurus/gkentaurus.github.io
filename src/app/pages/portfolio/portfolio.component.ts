import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioData = [
    {
      title: 'Módulo de pagos con PayU',
      image: '../../../assets//images/payu-logo.jpg',
      language: 'PHP, HTML5, CSS3, JS',
      link: 'https://bitbucket.org/',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      title: 'Módulo de facturación electrónica con Allegra',
      image: '../../../assets//images/alegra-logo.jpg',
      language: 'PHP, HTML5, CSS3, JS',
      link: 'https://bitbucket.org/',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
