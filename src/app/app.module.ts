import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from '@shared/header/header.module';
import { MenuItemsService } from '@shared/services/menu-items.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { MatProgressSpinnerModule } from '@angular/material';
import { CoreModule } from './core/core.module';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatProgressSpinnerModule,
    CoreModule
  ],
  providers: [MenuItemsService, {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
