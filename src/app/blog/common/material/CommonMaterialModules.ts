import { NgModule } from '@angular/core';
import { MatCardModule, MatTableModule, MatProgressBarModule, MatIconModule, MatButtonModule,
    MatTooltipModule, MatDialogModule, MatInputModule, MatFormFieldModule } from '@angular/material';

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
        MatFormFieldModule
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
        MatFormFieldModule
    ],
    declarations: [],
    providers: [],
})
export class CommonMaterialModules {

}
