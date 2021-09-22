import { Component, OnInit } from '@angular/core';
import { text } from './aboutUsText';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text: string = text;
  
  constructor() { }

  ngOnInit(): void {
  }

}
