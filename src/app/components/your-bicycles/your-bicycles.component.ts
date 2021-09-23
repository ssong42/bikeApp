import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bicycle } from 'src/app/mock-bicycles';
import { BicyclesService } from 'src/app/services/bicycles.service';

@Component({
  selector: 'app-your-bicycles',
  templateUrl: './your-bicycles.component.html',
  styleUrls: ['./your-bicycles.component.css']
})
export class YourBicyclesComponent implements OnInit {
  yourBicycles$: Observable<Bicycle[]>;
  
  constructor(private router: Router, private bicyclesService: BicyclesService) { 
    this.yourBicycles$ = this.bicyclesService.bicycles$;
  }

  ngOnInit(): void {
    console.log(this.yourBicycles$);
  }
  
  hasRoute(route: String) {
    return this.router.url == route;
  }

}
