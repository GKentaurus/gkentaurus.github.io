import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('GKentaurus > Home');
  }

  ngOnDestroy(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
