// delete.component.ts

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.scss'],
})
export class DeleteComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<DeleteComponent>
  ) {}

  close(result: boolean): void {
    this.dialogRef.close(result);
  }
}
