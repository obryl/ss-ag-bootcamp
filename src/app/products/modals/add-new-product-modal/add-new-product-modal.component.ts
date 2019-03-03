import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'boot-add-new-product-modal',
  templateUrl: './add-new-product-modal.component.html'
})
export class AddNewProductModalComponent {

  constructor(
    public dialogRef: MatDialogRef<AddNewProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}
