import { Component, OnInit } from '@angular/core';
import {DormitoryModel} from "../dormitory.model";

@Component({
  selector: 'app-dormitory-list',
  templateUrl: './dormitory-list.component.html',
  styleUrls: ['./dormitory-list.component.css']
})
export class DormitoryListComponent implements OnInit {

  dormitories: DormitoryModel[] = [
    {
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg'
    },
    {
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg'
    },
    {
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg'
    },
    {
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg'
    },
    {
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg'
    },
    {
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
