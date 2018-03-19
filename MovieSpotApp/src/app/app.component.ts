import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hidePanel : boolean;
  routerSubscription: Subscription;
  constructor(
    private router : Router
  ){
    this.routerSubscription = router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd && event.urlAfterRedirects) {
        this.hidePanel = (event.urlAfterRedirects === '/home');
      } else {
        this.hidePanel = false;
      }
    });
  }
}
