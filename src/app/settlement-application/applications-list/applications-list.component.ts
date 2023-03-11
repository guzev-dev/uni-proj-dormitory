import {Component, OnInit} from '@angular/core';
import {SettlementApplicationModule} from "../settlement-application.module";
import {ApplicationModel} from "../application.model";
import {componentChangeAnimation} from "../../animations/component-change.animation";

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.css', '../../styles/form-styles.css'],
  animations: [componentChangeAnimation]
})
export class ApplicationsListComponent implements OnInit {

  applications: ApplicationModel[] = [
    {
      id: 1,
      desiredRoom: {
        dormitoryId: 3,
        roomNumber: '432-1'
      },
      creationDate: new Date('2023-03-10'),
      settlementStartDate: new Date('2023-03-30'),
      settlementEndDate: new Date('2023-06-01'),
      applicationStatus: 'ПРИЙНЯТА'
    },
    {
      id: 1,
      desiredRoom: {
        dormitoryId: 3,
        roomNumber: '432-1'
      },
      creationDate: new Date(),
      settlementStartDate: new Date(),
      settlementEndDate: new Date(),
      applicationStatus: 'ПРИЙНЯТА'
    },
    {
      id: 1,
      desiredRoom: {
        dormitoryId: 3,
        roomNumber: '432-1'
      },
      creationDate: new Date(),
      settlementStartDate: new Date(),
      settlementEndDate: new Date(),
      applicationStatus: 'ПРИЙНЯТА'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  toUADateFormat(date: Date) {
    let array: string[] = date.toLocaleDateString().split('/');
    return [array[1].padStart(2, '0'), array[0].padStart(2, '0'), array[2]].join('.');
  }

}
