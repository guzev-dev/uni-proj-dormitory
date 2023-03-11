import { Component, OnInit } from '@angular/core';
import {DormitoryModel} from "../dormitory.model";
import {RoomModel} from "../room.model";
import {componentChangeAnimation} from "../../animations/component-change.animation";

@Component({
  selector: 'app-dormitory-page',
  templateUrl: './dormitory-page.component.html',
  styleUrls: ['./dormitory-page.component.css'],
  animations: [componentChangeAnimation]
})
export class DormitoryPageComponent implements OnInit {

  selectedDormitory: DormitoryModel = {
    dormitoryNumber: 3,
    address: 'м. Київ, вул. Гарматна 51',
    dormitoryType: 'Коридорна система',
    faculties: 'ФКПІ, АКФ, ФМВЛ',
    photo: 'https://nau.edu.ua/site/variables/menuimages/hostel7_2.jpg',
    contacts: "Комендант: Іваненко Іван Іванович. Тел: (+380) 95 405-32-32"
  }

  dormitoryRooms: RoomModel[] = [
    {
      id: 1,
      dormitoryId: 3,
      roomNumber: "243-2",
      capacity: 4,
      furniture: [
        {id: 1, furnitureType: 'Шафа'},
        {id: 2, furnitureType: 'Шафа'},
        {id: 3, furnitureType: 'Стіл'},
        {id: 4, furnitureType: 'Стул'},
        {id: 5, furnitureType: 'Стул'},
      ]
    },
    {
      id: 1,
      dormitoryId: 3,
      roomNumber: "243-2",
      capacity: 4,
      furniture: [
        {id: 1, furnitureType: 'Шафа'},
        {id: 2, furnitureType: 'Шафа'},
        {id: 3, furnitureType: 'Стіл'},
        {id: 4, furnitureType: 'Стул'},
        {id: 5, furnitureType: 'Стул'},
      ]
    },
    {
      id: 1,
      dormitoryId: 3,
      roomNumber: "243-2",
      capacity: 4,
      furniture: [
        {id: 1, furnitureType: 'Шафа'},
        {id: 2, furnitureType: 'Шафа'},
        {id: 3, furnitureType: 'Стіл'},
        {id: 4, furnitureType: 'Стул'},
        {id: 5, furnitureType: 'Стул'},
      ]
    },
    {
      id: 1,
      dormitoryId: 3,
      roomNumber: "243-2",
      capacity: 4,
      furniture: [
        {id: 1, furnitureType: 'Шафа'},
        {id: 2, furnitureType: 'Шафа'},
        {id: 3, furnitureType: 'Стіл'},
        {id: 4, furnitureType: 'Стул'},
        {id: 5, furnitureType: 'Стул'},
      ]
    },
    {
      id: 1,
      dormitoryId: 3,
      roomNumber: "243-2",
      capacity: 4,
      furniture: [
        {id: 1, furnitureType: 'Шафа'},
        {id: 2, furnitureType: 'Шафа'},
        {id: 3, furnitureType: 'Стіл'},
        {id: 4, furnitureType: 'Стул'},
        {id: 5, furnitureType: 'Стул'},
      ]
    },
    {
      id: 1,
      dormitoryId: 3,
      roomNumber: "243-2",
      capacity: 4,
      furniture: [
        {id: 1, furnitureType: 'Шафа'},
        {id: 2, furnitureType: 'Шафа'},
        {id: 3, furnitureType: 'Стіл'},
        {id: 4, furnitureType: 'Стул'},
        {id: 5, furnitureType: 'Стул'},
      ]
    },
    {
      id: 1,
      dormitoryId: 3,
      roomNumber: "243-2",
      capacity: 4,
      furniture: [
        {id: 1, furnitureType: 'Шафа'},
        {id: 2, furnitureType: 'Шафа'},
        {id: 3, furnitureType: 'Стіл'},
        {id: 4, furnitureType: 'Стул'},
        {id: 5, furnitureType: 'Стул'},
      ]
    },
    {
      id: 1,
      dormitoryId: 3,
      roomNumber: "243-2",
      capacity: 4,
      furniture: [
        {id: 1, furnitureType: 'Шафа'},
        {id: 2, furnitureType: 'Шафа'},
        {id: 3, furnitureType: 'Стіл'},
        {id: 4, furnitureType: 'Стул'},
        {id: 5, furnitureType: 'Стул'},
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
