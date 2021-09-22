import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bicycles } from 'src/app/mock-bicycles';

@Component({
  selector: 'app-your-bicycles',
  templateUrl: './your-bicycles.component.html',
  styleUrls: ['./your-bicycles.component.css']
})
export class YourBicyclesComponent implements OnInit {
  yourBicycles = bicycles;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  hasRoute(route: String) {
    return this.router.url == route;
  }
}
