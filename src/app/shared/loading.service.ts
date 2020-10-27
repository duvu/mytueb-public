import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SpinnerComponent} from "./component/spinner/spinner.component";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private dialogRef;
  constructor(public dialog: MatDialog) { }

  show() {
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(SpinnerComponent, {
        width: '150px'
      });
    }
  }

  hide() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
