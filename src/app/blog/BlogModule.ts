import {NgModule} from '@angular/core';
import { PostService } from './services/PostService';
import { PostResource } from './services/PostResource';
import { PostListModule } from './list/PostListModule';

@NgModule({
    imports:[
        PostListModule
    ],
    exports:[
        PostListModule
    ],
    declarations:[],
    providers:[
        PostService,
        PostResource
    ],
})
export class BlogModule{

}