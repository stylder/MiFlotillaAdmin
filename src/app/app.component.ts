import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: any;

  constructor() {

    //this.user = this.authService.getUser();
  }

  logout() {
    console.log('Logout')
    //this.authService.logout();
  }
}


