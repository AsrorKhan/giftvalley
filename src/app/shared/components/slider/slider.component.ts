import {Component, Input, OnInit} from '@angular/core';
import {
  NzCarouselTransformNoLoopStrategy,
  NzCarouselFlipStrategy,
  NZ_CAROUSEL_CUSTOM_STRATEGIES
} from 'ng-zorro-antd/carousel';
import {bestSeller} from "../../../../assets/mockdata/best-seller";
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NZ_CAROUSEL_CUSTOM_STRATEGIES,
      useValue: [
        { name: 'transform-no-loop', strategy: NzCarouselTransformNoLoopStrategy },
        { name: 'flip', strategy: NzCarouselFlipStrategy }
      ]
    }
  ]
})
export class SliderComponent {


  public bestSellerList = bestSeller;
  constructor() { }


}
