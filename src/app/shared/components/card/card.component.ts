import {Component, Input} from '@angular/core';
import {ICard} from "../../../core/models/card";

export type Col = {sm: number, md: number, lg: number}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() col: Col = {
    sm: 1, md: 1, lg: 1
  };

  @Input() cards!: ICard[];

  // @Input() cardItem: ICard = {
  //   type: '',
  //   title: '',
  //   imgUrl: '',
  //   isExist: false,
  //   oldPrice: 0,
  //   price: 0
  // }
  //
}
