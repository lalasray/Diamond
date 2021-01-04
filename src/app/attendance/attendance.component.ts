import { Component, OnInit } from "@angular/core";
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: "app-attendance",
  templateUrl: "./attendance.component.html",
  styleUrls: ["./attendance.component.css"]
})
export class AttendanceComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(Regularization);
  }

  ngOnInit() {}
}

@Component({
  selector: 'regularization',
  templateUrl: './regularization.html',
  styleUrls: ["./regularization.css"]
})
export class Regularization {}

