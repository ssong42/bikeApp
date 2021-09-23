import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BicyclesService } from 'src/app/services/bicycles.service';
import { Bicycle } from 'src/app/mock-bicycles';
import { Part } from 'src/app/mock-parts';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  allBicycles: Bicycle[] = [];
  filteredBicycles: Bicycle[] = [];
  value = '';
  added: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bicyclesService: BicyclesService
  ) {
  }

  ngOnInit(): void {
    this.added = false;
    this.bicyclesService.bicycles$.subscribe(
      (data) => {
        this.allBicycles = data;
      }
    );
  }

  setValueAndFilter(event: any) {
    this.value = event.target.value;
    this.filteredBicycles = this.allBicycles.filter(bike => bike.name
      .toLocaleLowerCase()
      .includes(this.value.toLocaleLowerCase()));
  }

  isCompatible(part: Part, bike: Bicycle): number {
    return part.compatibleBikes.filter((cBike: Bicycle) => {
      return cBike.id == bike.id;
    })
    .length;
  }

  addPartToBicycle(bike: Bicycle): void {
    let updatedBike = bike;

    updatedBike.parts.push({id: this.data.part.id});
    
    this.added = true;
    this.bicyclesService.updateBicycle(bike);
  }

}
