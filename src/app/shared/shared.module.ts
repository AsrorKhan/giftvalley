import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {IconDefinition} from '@ant-design/icons-angular';
import {
  CloseCircleTwoTone,
  MenuUnfoldOutline,
  PhoneOutline,
  ShoppingCartOutline,
  FacebookOutline,
  InstagramOutline,
  WechatOutline,
  FieldTimeOutline,
  MessageOutline,
  PoweroffOutline
} from '@ant-design/icons-angular/icons';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';

const icons: IconDefinition[] = [
  PhoneOutline,
  ShoppingCartOutline,
  MenuUnfoldOutline,
  CloseCircleTwoTone,
  FacebookOutline,
  InstagramOutline,
  WechatOutline,
  FieldTimeOutline,
  MessageOutline,
  PoweroffOutline,
];

@NgModule({
  declarations: [
    CardListComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    NzIconModule.forRoot(icons),
    NzGridModule,
  ],
  exports: [
    NzLayoutModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    CardListComponent,
    CardComponent,
  ],
  providers: [],
})
export class SharedModule {
}
