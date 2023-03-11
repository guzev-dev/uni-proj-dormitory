import {Action} from "@ngrx/store";

import * as fromApplicationActions from "./application.actions";
import {RoomModel} from "../../dormitory/room.model";

export interface ApplicationState {
  selectedRoom: RoomModel
}

export const initialState: ApplicationState = {
  selectedRoom: null
}

export function applicationReducer(state: ApplicationState = initialState,
                                   action: Action) : ApplicationState {

  switch (action.type) {
    case fromApplicationActions.SELECT_ROOM: {
      return {
        ...state,
        selectedRoom: (action as fromApplicationActions.SelectRoomAction).room
      };
    }

    case fromApplicationActions.CLEAR_SELECTION: {
      return {
        ...state,
        selectedRoom: null
      };
    }

    default:
      return state;
  }

}
