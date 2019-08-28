import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: 'postList.html'
})

export class PostListComponent implements OnInit {
    public postList = postList;
    constructor() { }

    ngOnInit() { }
}

const postList = [
    {
        title: 'Some title 1',
        subTitle: 'Sub title 1',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
        title: 'Some title 2',
        subTitle: 'Sub title 2',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
        title: 'Some title 3',
        subTitle: 'Sub title 3',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
        title: 'Some title 4',
        subTitle: 'Sub title 4',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    }
]