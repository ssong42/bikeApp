import { Component, OnInit } from '@angular/core';
import { parts } from 'src/app/mock-parts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  parts = parts;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  hasRoute(route: String) {
    return this.router.url == route;
  }

}
