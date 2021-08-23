import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {IconDefinition} from '@ant-design/icons-angular';
import {PhoneOutline} from '@ant-design/icons-angular/icons';
import {NzLayoutModule} from "ng-zorro-antd/layout";

const icons: IconDefinition[] = [
  PhoneOutline,

];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NzIconModule.forRoot(icons),
  ],
  exports: [
    NzLayoutModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,

  ],
  providers: [],
})
export class SharedModule {
}
