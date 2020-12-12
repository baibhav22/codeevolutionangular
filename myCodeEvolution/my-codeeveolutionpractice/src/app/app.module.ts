import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItserviceComponent } from './itservice/itservice.component';
import { ItserviceService} from './itservice.service';


@NgModule({
  declarations: [
    AppComponent,
    ItserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ItserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
