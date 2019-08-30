import { NgModule } from '@angular/core';
import { MatCardModule, MatTableModule, MatProgressBarModule, MatIconModule, MatButtonModule,
    MatTooltipModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatSnackBarModule } from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
    ],
    exports: [
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
    ],
    declarations: [],
    providers: [],
})
export class CommonMaterialModules {

}
