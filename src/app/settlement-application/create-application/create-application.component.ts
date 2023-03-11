import { Component, OnInit } from '@angular/core';
import {RoomModel} from "../../dormitory/room.model";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {componentChangeAnimation} from "../../animations/component-change.animation";

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css', '../../styles/form-styles.css'],
  animations: [componentChangeAnimation]
})
export class CreateApplicationComponent implements OnInit {

  selectedRoom: RoomModel = null;

  subscriptions: Subscription[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select("application")
        .subscribe((state) => {
          this.selectedRoom = state.selectedRoom;
        })
    );

  }

}
