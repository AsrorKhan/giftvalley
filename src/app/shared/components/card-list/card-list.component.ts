import {Component, OnInit} from '@angular/core';
import {Cards} from "../../../../assets/mockdata/cards";
import {Col} from "../card/card.component";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  cardListData = Cards;
  col: Col = {
    sm: 6,
    md: 3,
    lg: 4
  }


}
