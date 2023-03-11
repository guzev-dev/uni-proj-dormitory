import { Component, OnInit } from '@angular/core';
import {DormitoryModel} from "../dormitory.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dormitories-list',
  templateUrl: './dormitories-list.component.html',
  styleUrls: ['./dormitories-list.component.css']
})
export class DormitoriesListComponent implements OnInit {

  dormitories: DormitoryModel[] = [
    {
      id: 1,
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
      faculties: 'ФКПІ, ФКМВ, АКС, БІКС'
    },
    {
      id: 2,
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
      faculties: 'ФКПІ, ФКМВ, АКС, БІКС'
    },
    {
      id: 1,
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
      faculties: 'ФКПІ, ФКМВ, АКС, БІКС'
    },
    {
      id: 1,
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
      faculties: 'ФКПІ, ФКМВ, АКС, БІКС'
    },
    {
      id: 1,
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
      faculties: 'ФКПІ, ФКМВ, АКС, БІКС'
    },
    {
      id: 1,
      dormitoryNumber: 1,
      address: 'м. Київ, вул. Іваненко 51а',
      dormitoryType: 'Блочна система',
      photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
      faculties: 'ФКПІ, ФКМВ, АКС, БІКС'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(dormitry: DormitoryModel) {
    this.router.navigate(["../dormitory/" + dormitry.id])
  }

}
