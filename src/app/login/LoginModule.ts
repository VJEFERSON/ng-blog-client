import { NgModule } from '@angular/core';
import { LoginComponent } from './LoginComponent';
import { CommonMaterialModules } from '../blog/common/material/CommonMaterialModules';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './LoginRoutes';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules,
        RouterModule.forChild(LoginRoutes),
        FormsModule,
    ],
    exports: [],
    declarations: [
        LoginComponent
    ],
    providers: [],
})
export class LoginModule {
}
