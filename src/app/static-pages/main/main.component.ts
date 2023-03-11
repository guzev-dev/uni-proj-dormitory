import { Component, OnInit } from '@angular/core';
import {componentChangeAnimation} from "../../animations/component-change.animation";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [componentChangeAnimation]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
