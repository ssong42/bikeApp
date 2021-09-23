import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { parts } from 'src/app/mock-parts';
import { ModalComponent} from '../modal/modal.component'

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css'],
})
export class PartComponent implements OnInit {
  part: any;
  partId = 1;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.partId = params['id'];
    });
    //find the part from parts list
    this.part = parts.find((part) => part.id == this.partId);
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
}
