import {Component, Input, OnInit} from '@angular/core';

import * as fromApplicationActions from "../../settlement-application/store/application.actions";
import {FurnitureItemModel, RoomModel} from "../room.model";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomModel[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  furnitureAsSet(array: FurnitureItemModel[]) {
    return new Set(array.map(x => x.furnitureType));
  }

  furnitureCount(array: FurnitureItemModel[], furnitureType: string) {
    return array.filter(x => x.furnitureType === furnitureType).length;
  }

  selectRoom(room: RoomModel) {
    this.store.dispatch(new fromApplicationActions.SelectRoomAction(room));
  }

}
