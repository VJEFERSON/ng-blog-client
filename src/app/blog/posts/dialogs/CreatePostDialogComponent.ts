import {Component } from '@angular/core';
import { CreatePostDto } from '../services/dataModel/CreatePostDto';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/PostService';
import { finalize } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-create-post-dialog',
    templateUrl: 'createPostDialog.html'
})

export class CreatePostDialogComponent {
    public newPostModule: CreatePostDto = {} as CreatePostDto;
    public isLoading = false;
    constructor(private dialogRef: MatDialogRef<CreatePostDialogComponent>, private postService: PostService) {

    }

    public submit(postForm: NgForm) {
        if (postForm.valid) {
            this.isLoading = true;
            this.postService.createPost(this.newPostModule)
                .pipe (finalize ( () => this.isLoading = false ))
                .subscribe ( (response) => {
                    this.dialogRef.close(response);
                });
        }
    }
}
