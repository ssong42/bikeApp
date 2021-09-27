import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Part } from 'src/app/mock-parts';
import { PartsService } from 'src/app/services/parts.service';
import { PartsAddModalComponent} from '../parts-add-modal/parts-add-modal.component'
import { PartsViewModalComponent } from '../parts-view-modal/parts-view-modal.component';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css'],
})
export class PartComponent implements OnInit {
  parts: Part[] = [];
  part: any = {};
  partId = "1";

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private partService: PartsService) {  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.partId = params['id'];
    });
    //find the part from parts list
    this.partService.parts$.subscribe(
      (data: Part[]) => {
        this.parts = data;
        this.part = this.parts.find((part) => part.id == this.partId);
      }
    );
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(PartsAddModalComponent, {
      width: "50%",
      height: "500px",
      data: {part : this.part}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openViewDialog($event: any) {

    const dialogRef = this.dialog.open(PartsViewModalComponent, {
      width: "50%",
      height: "500px",
      data: {images: this.part.images, selectedImage: $event},
      panelClass: "transparent"
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
