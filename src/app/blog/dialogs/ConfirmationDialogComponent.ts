import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: 'confirmationDialogPostDelete.html'
})

export class ConfirmationDialogComponent {
    constructor(private dialogRef: MatDialogRef<void>) { }

    public submit() {
        this.dialogRef.close(true);
    }
}
