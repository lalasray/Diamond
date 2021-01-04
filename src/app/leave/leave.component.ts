import { Component, OnInit } from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
import {Regularization} from '../attendance/attendance.component';

@Component({
  selector: "app-leave",
  templateUrl: "./leave.component.html",
  styleUrls: ["./leave.component.css"]
})
export class LeaveComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddLeave);
  }

  ngOnInit() {}
}
@Component({
  selector: 'regularization',
  templateUrl: './addleave.html',
  styleUrls: ["./addleave.css"]
})
export class AddLeave {}

