import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostsModule } from './posts/PostsModule';
import { ConfirmationDialogComponent } from './dialogs/ConfirmationDialogComponent';
import { CommonMaterialModules } from './common/material/CommonMaterialModules';
import { RouterModule } from '@angular/router';
import { BlogRouting } from './BlogRouting';
import { BlogGuard } from './guards/BlogGuard';

@NgModule({
    imports: [
        PostsModule,
        HttpClientModule,
        CommonMaterialModules,
        RouterModule.forChild(BlogRouting),
    ],
    exports: [
        PostsModule,
        CommonMaterialModules,
    ],
    declarations: [
        ConfirmationDialogComponent,
    ],
    entryComponents: [
        ConfirmationDialogComponent,
    ],
    providers: [
        BlogGuard,
    ],
})
export class BlogModule {

}
