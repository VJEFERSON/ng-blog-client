import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/PostService';
import { Observable, BehaviorSubject } from 'rxjs';
import { PostDto } from '../services/dataModel/PostDto';
import { CreatePostDialogComponent } from '../dialogs/CreatePostDialogComponent';
import { MatDialog } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
    selector: 'app-post-list',
    templateUrl: 'postList.html'
})

export class PostListComponent implements OnInit {
    public isLoading = false;
    public displayedColumns: string[] = ['id', 'title', 'subTitle', 'imageUrl'];
    private postListSubject: BehaviorSubject<PostDto[]> = new BehaviorSubject(null);
    constructor(private postService: PostService, private matDialog: MatDialog) {

    }

    ngOnInit() {
        this.isLoading = true;
        this.postService.getAllPostItems()
            .pipe (finalize ( () => this.isLoading = false ))
            .subscribe((postListItems) => this.postListSubject.next(postListItems));
    }

    public getPostsList(): Observable<PostDto[]> {
        return this.postListSubject.asObservable();
    }

    public createPost() {
        const ref  = this.matDialog.open(CreatePostDialogComponent, {
            width: '600px',
        });

        ref.afterClosed().subscribe((newPost: PostDto) => {
            console.log('Dialog Closed');
            if (newPost) {
                const list = this.postListSubject.getValue();
                list.push(newPost);
                this.postListSubject.next(_.cloneDeep(list));
            }
        });
    }
}
