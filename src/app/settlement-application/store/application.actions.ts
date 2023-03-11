import {Action} from "@ngrx/store";
import {RoomModel} from "../../dormitory/room.model";

export const SELECT_ROOM = '[Settlement Application] Select Room';
export const CLEAR_SELECTION = '[Settlement Application] Clear Room Selection';

export class SelectRoomAction implements Action {
  type = SELECT_ROOM;

  constructor(public room: RoomModel) {
  }
}

export class ClearSelectionAction implements Action {
  type = CLEAR_SELECTION;

  constructor() {
  }
}
