import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './core/components/header/header.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {SharedModule} from './shared/shared.module'
import {DataService} from "./features/services/get-card-data.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
