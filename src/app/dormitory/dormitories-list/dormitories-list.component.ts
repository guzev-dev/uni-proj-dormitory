import { Component, OnInit } from '@angular/core';
import {DormitoryModel} from "../dormitory.model";

@Component({
  selector: 'app-dormitories-list',
  templateUrl: './dormitories-list.component.html',
  styleUrls: ['./dormitories-list.component.css']
})
export class DormitoriesListComponent implements OnInit {

  dormitories: DormitoryModel[] = [
    {
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
      faculties: 'ФКПІ, ФКМВ, АКС, БІКС'
    },
    {
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
      faculties: 'ФКПІ, ФКМВ, АКС, БІКС'
    },
    {
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
      faculties: 'ФКПІ, ФКМВ, АКС, БІКС'
    },
    {
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
      faculties: 'ФКПІ, ФКМВ, АКС, БІКС'
    },
    {
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
      faculties: 'ФКПІ, ФКМВ, АКС, БІКС'
    },
    {
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
      faculties: 'ФКПІ, ФКМВ, АКС, БІКС'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
