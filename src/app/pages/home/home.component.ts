import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  cols = 3;
  constructor() {}

  ngOnInit(): void {}

  onColumnsCountChange(colsNumber: number): void { 
     this.cols = colsNumber;
  }
}
