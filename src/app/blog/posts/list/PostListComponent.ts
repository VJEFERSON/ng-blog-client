import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/PostService';
import { Observable, BehaviorSubject } from 'rxjs';
import { PostDto } from '../services/dataModel/PostDto';
import { CreatePostDialogComponent } from '../dialogs/CreatePostDialogComponent';
import { MatDialog, MatSnackBar } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { EditPostDto } from '../services/dataModel/EditPostDto';
import { ConfirmationDialogComponent } from '../../dialogs/ConfirmationDialogComponent';

@Component({
    selector: 'app-post-list',
    templateUrl: 'postList.html',
    styleUrls: ['postList.scss']
})

export class PostListComponent implements OnInit {
    public isLoading = false;
    public displayedColumns: string[] = ['id', 'title', 'subTitle', 'imageUrl', 'action'];
    private postListSubject: BehaviorSubject<PostDto[]> = new BehaviorSubject(null);
    constructor(private postService: PostService, private matDialog: MatDialog,
                private snackBar: MatSnackBar) {

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
                this.snackBar.open('The post ${newPost.title} has been created!', null, {
                    duration: 2500,
                });
            }
        });
    }

    public editPost(editPost: EditPostDto) {
        const ref = this.matDialog.open(CreatePostDialogComponent, {
            width: '600px',
            data: {editPostDto: editPost}
        });

        ref.afterClosed().subscribe((editedPost: PostDto) => {
            if (editedPost) {
                const list = this.postListSubject.getValue();
                const postIndex = _.findIndex(list, post => post.id === editedPost.id);
                list[postIndex] = editedPost;
                this.postListSubject.next(_.cloneDeep(list));
                this.snackBar.open('The post ${editedPost.title} has been edited!', null, {
                    duration: 2500,
                });
            }
        });
    }

    public deletePost(postDto: PostDto) {
        const ref = this.matDialog.open(ConfirmationDialogComponent, {
            width: '300px;'
        });
        ref.afterClosed().subscribe((canContinue) => {
            if (canContinue) {
                this.isLoading = true;
                this.postService.deletePost(postDto.id)
                    .pipe (finalize ( () => this.isLoading = false ))
                    .subscribe(() => {
                        const list = this.postListSubject.getValue();
                        _.remove(list, post => post.id === postDto.id);
                        this.postListSubject.next(_.cloneDeep(list));
                        this.snackBar.open('The post ${postDto.title} has been removed!', null, {
                            duration: 2500,
                        });
                    });
            }
        });
    }
}
