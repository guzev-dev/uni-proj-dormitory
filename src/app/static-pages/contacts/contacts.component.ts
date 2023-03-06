import {Component, OnInit} from '@angular/core';
import {DormitoryModel} from "../../dormitory/dormitory.model";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  dormitories: DormitoryModel[] = [
    {
      dormitoryNumber: 1,
      contacts: "Комендант: Іваненко Іван Івановиdfgdfч. Тел: (+380) 95 405-32-32"
    },
    {
      dormitoryNumber: 1,
      contacts: "Комендант: Іваненко Іван Іванович. Тел: (+380) 95 405-32-32"
    },
    {
      dormitoryNumber: 1,
      contacts: "Комендант: Іваненко Іван Івановdfgdfич. Тел: (+380) 95 405-32-32"
    },
    {
      dormitoryNumber: 1,
      contacts: "Комендант: Іваненко Іван Іванович. Тел: (+380) 95 405-32-32"
    },
    {
      dormitoryNumber: 12,
      contacts: "Комендант: Іваненко dfsdfsІван Іванович. Тел: (+380) 95 405-32-32"
    },
    {
      dormitoryNumber: 13,
      contacts: "Комендант: Іваненко sdfsdІван Іванович. Тел: (+380) 95 405-32-32"
    },
    {
      dormitoryNumber: 1,
      contacts: "Комендант: Іваненко Іsfdsdfван Іванович. Тел: (+380) 95 405-32-32"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
