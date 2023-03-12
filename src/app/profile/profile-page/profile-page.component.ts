import { Component, OnInit } from '@angular/core';
import {componentChangeAnimation} from "../../animations/component-change.animation";
import {UserModel} from "../user.model";
import {UserInventoryItemModel} from "../user-inventory-item.model";
import {UserFileModel} from "../user-file.model";

@Component({
  selector: 'app-account-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  animations: [componentChangeAnimation]
})
export class ProfilePageComponent implements OnInit {

  authorizedUser: UserModel = {
    id: 1,
    firstName: 'Іван',
    lastName: 'Іванов',
    patronymic: 'Іванович',
    gender: 'Чоловік',
    phoneNumber: '(+380) 95 406-32-12',
    email: 'ivanov@email.com',
    faculty: 'ФКПІ',
    group: 'ПІ-422'
  };

  userItems: UserInventoryItemModel[] = [
    {
      id: 2,
      inventoryItem: 'Ковдра'
    },
    {
      id: 2,
      inventoryItem: 'Подушка'
    },
    {
      id: 2,
      inventoryItem: 'Матрац'
    },
    {
      id: 2,
      inventoryItem: 'Матрац'
    }
  ];

  userFiles: UserFileModel[] = [
    {
      id: 3,
      file: 'document.jpg',
      name: 'Довідка про щеплення'
    },
    {
      id: 3,
      file: 'document.jpg',
      name: 'Копія флюорографії'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
