import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bicycle } from 'src/app/mock-bicycles';
import { Part } from 'src/app/mock-parts';
import { BicyclesService } from 'src/app/services/bicycles.service';
import { PartsService } from 'src/app/services/parts.service';

@Component({
  selector: 'app-bicycle-overview',
  templateUrl: './bicycle-overview.component.html',
  styleUrls: ['./bicycle-overview.component.css'],
})
export class BicycleOverviewComponent implements OnInit {
  parts: Part[] = [];
  bikeParts: Part[] = [];
  bicycle: any;
  bicycles: Bicycle[] = [];
  bicycleId: number = 1;

  constructor(
    private route: ActivatedRoute,
    private bicyclesService: BicyclesService,
    private partService: PartsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bicycleId = params['id'];
    });

    this.bicyclesService.bicycles$.subscribe((data: Bicycle[]) => {
      //find the bicycle from bicycles list
      this.bicycle = data.find(
        (bike: Bicycle) => bike.id == this.bicycleId
      );
    });

    this.partService.parts$.subscribe((data: Part[]) => {
      this.parts = data;

      // find the parts for the bicycle
      this.bikeParts = this.parts.filter((p) => {
        if (this.bicycle.parts.find((pp: Part) => pp.id == p.id)) return true;
        return false;
      });
    });
  }
}
