import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioData = [
    {
      title: 'Módulo para Prestashop de pagos con PayU',
      image: '../../../assets//images/payu_logo.png',
      language: 'PHP, HTML5, CSS3, JS',
      link: 'https://bitbucket.org/GKentaurus/mtspayuapi_v1.6/src/master/',
      description:
        'Este módulo permite al propietario de una tienda de prestashop, dar la opcíon de pagos en línea a cualquier usuario que así lo desee, sea por tarjetas de crédito, transferencias o consignaciones en efectivo.'
    },
    {
      title: 'Módulo para Prestashop de facturación electrónica con Allegra',
      image: '../../../assets//images/alegra_logo.png',
      language: 'PHP, HTML5, CSS3, JS',
      link: 'https://bitbucket.org/GKentaurus/mtsallegraapi/src/master/',
      description:
        'Este módulo permite enviar la información necesaria para crear un cliente (razón social), productos, inventarios y registrar una factura de venta para posteriormente ser enviada electrónicamente.'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
