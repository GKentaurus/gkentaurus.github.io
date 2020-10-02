import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gkentaurus';
  constructor() {}

  public getRouterOutletState(outlet): any {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
