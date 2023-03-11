import {applicationReducer, ApplicationState} from "./settlement-application/store/application.reducer";
import {ActionReducerMap} from "@ngrx/store";

export interface AppState {
  application: ApplicationState
}

export const appReducer : ActionReducerMap<AppState> = {
  application: applicationReducer
}
