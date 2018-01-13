import 'hammerjs';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppMaterialModule} from './app.material.module';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';


import {AuthService} from './services/auth.service';
import {LoginComponent} from './login/login.component';
import {HomeComponent, DialogContentComponent} from './home/home.component';
import {CamionesComponent} from './camiones/camiones.component';
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'camiones', component: CamionesComponent}
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    DialogContentComponent,
    LoginComponent,
    HomeComponent,
    CamionesComponent,
    MenuComponent
  ],
  entryComponents: [DialogContentComponent],
  providers: [AuthService],
  bootstrap: [AppComponent],

})
export class AppModule {
}
