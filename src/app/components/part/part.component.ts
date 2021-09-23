import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Bicycle } from 'src/app/mock-bicycles';
import { Part } from 'src/app/mock-parts';
import { PartsService } from 'src/app/services/parts.service';
import { ModalComponent} from '../modal/modal.component'

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css'],
})
export class PartComponent implements OnInit {
  parts: Part[] = [];
  part: any = {};
  partId = "";

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private partService: PartsService) {  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.partId = params['id'];
    });
    //find the part from parts list
    this.partService.parts$.subscribe(
      (data: Part[]) => {
        this.parts = data;

        this.findPart();
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "50%",
      height: "500px",
      data: {part : this.part}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  findPart(): void {
    this.part = this.parts.find((part) => part._id == this.partId);
  }
}
