import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {IconDefinition} from '@ant-design/icons-angular';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
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
  PoweroffOutline,
  HeartOutline
} from '@ant-design/icons-angular/icons';

import {NzLayoutModule} from "ng-zorro-antd/layout";
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import {CommonModule} from "@angular/common";
import { SliderComponent } from './components/slider/slider.component';
import { MainComponent } from '../features/components/main/main.component';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { HeaderSliderComponent } from './components/header-slider/header-slider.component';

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
  HeartOutline
];

@NgModule({
  declarations: [
    CardListComponent,
    CardComponent,
    SliderComponent,
    MainComponent,
    HeaderBannerComponent,
    HeaderSliderComponent,
  ],
  imports: [
    BrowserModule,
    NzIconModule,
    NzIconModule.forRoot(icons),
    NzGridModule,
    CommonModule,
    NzCarouselModule
  ],
  exports: [
    NzLayoutModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    CardListComponent,
    CardComponent,
    MainComponent,
  ],
  providers: [],
})
export class SharedModule {
}
