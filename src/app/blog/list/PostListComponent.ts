import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/PostService';

@Component({
    selector: 'app-post-list',
    templateUrl: 'postList.html'
})

export class PostListComponent implements OnInit {
    public postList;
    constructor(private postService: PostService) { 

    }

    ngOnInit() { 
        this.postList = this.postService.getAllPostItems();
    }
}