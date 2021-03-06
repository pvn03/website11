import { Observable } from 'rxjs/Rx';
import { MdDialogRef, MdDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { SuccessDialogComponent } from '../components/dialogs/success-dialog.component';

@Injectable()
export class SuccessDialogService {

  constructor(private dialog: MdDialog) { }

  /**
   * Opens a success dialog
   * @param d       dialog component
   * @param message corresponding message
   * @returns {Observable<any>}
   */
  public dialogPopup(message: string): Observable<boolean> {
    let dialogRef: MdDialogRef<any>;

    dialogRef = this.dialog.open(SuccessDialogComponent);
    dialogRef.componentInstance.message = message;
    setTimeout(() => {
      dialogRef.close();
    }, 700);
    return dialogRef.afterClosed();
  }

   public dialogPopupNoAutoClose(message: string, tip : string): Observable<boolean> {
    let dialogRef: MdDialogRef<any>;

    dialogRef = this.dialog.open(SuccessDialogComponent);
    dialogRef.componentInstance.message = message;
    dialogRef.componentInstance.tip = tip;
    return dialogRef.afterClosed();
  }
}
