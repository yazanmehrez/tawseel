import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-xgallery',
    templateUrl: './app-xgallery.component.html',
    styleUrls: ['./app-xgallery.component.css']
})
export class AppXgalleryComponent implements OnInit {
    @Input() images: any;
    index;
    lastIndex;

    constructor() {
    }

    next() {
        this.index = this.index + 1;
    }

    prev() {
        this.index = this.index - 1;
    }

    ngOnInit() {
        this.index = 0;
        this.lastIndex = this.images.length - 1;
    }

}
