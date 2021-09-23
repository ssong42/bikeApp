import { Component } from '@angular/core';
import { Part } from './mock-parts';
import { BicyclesService } from './services/bicycles.service';
import { PartsService } from './services/parts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor (private partsService: PartsService, private bicycleService: BicyclesService) {
  }

  ngOnInit(): void {
    this.partsService.loadParts();
    this.bicycleService.loadBicycles();
  }
}
