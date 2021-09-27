import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-parts-view-modal',
  templateUrl: './parts-view-modal.component.html',
  styleUrls: ['./parts-view-modal.component.css']
})
export class PartsViewModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

}
