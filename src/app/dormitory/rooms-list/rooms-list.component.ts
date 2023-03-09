import {Component, Input, OnInit} from '@angular/core';
import {FurnitureItemModel, RoomModel} from "../room.model";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomModel[];

  constructor() { }

  ngOnInit(): void {
  }

  furnitureAsSet(array: FurnitureItemModel[]) {
    return new Set(array.map(x => x.furnitureType));
  }

  furnitureCount(array: FurnitureItemModel[], furnitureType: string) {
    return array.filter(x => x.furnitureType === furnitureType).length;
  }

}
