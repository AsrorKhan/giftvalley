import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module'
import {DataService} from "./features/services/get-card-data.service";
import {CoreModule} from "./core/core.module";
import {NzCarouselModule} from "ng-zorro-antd/carousel";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    CoreModule,
    NzCarouselModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
