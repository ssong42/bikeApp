import { Component, OnInit } from '@angular/core';
import { Part } from 'src/app/mock-parts';
import { Router } from '@angular/router';
import { PartsService } from 'src/app/services/parts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  parts$: Observable<Part[]>;
  
  constructor(private router: Router, private partService: PartsService) { 
    this.parts$ = this.partService.parts$;
  }

  ngOnInit(): void {
  }
  
  hasRoute(route: String) {
    return this.router.url == route;
  }

}
