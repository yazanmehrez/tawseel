import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-slideshow',
    templateUrl: './app-slideshow.component.html',
    styleUrls: ['./app-slideshow.component.css']
})
export class AppSlideshowComponent implements OnInit, AfterViewInit {
    @ViewChild('slideshow') private slideshow: any;
    @Input() imageUrls;

    constructor() {
    }

    ngAfterViewInit() {
        $('<i class="fa fa-angle-left custom-arrow prev" id="prevSlide"></i>').insertBefore('.slick-dots li:first-child');
        $('<i class="fa fa-angle-right custom-arrow next" id="nextSlide"></i>').insertAfter('.slick-dots li:last-child');

        const self = this;
        $('#nextSlide').on('click', function (event) {
            self.slideshow.onSlide(1);
        });
        $('#prevSlide').on('click', function (event) {
            self.slideshow.onSlide(-1);
        });

        $('.slideshow-container .slides').each(function (index) {
            $(this).removeAttr('title');
            $('<div><span class="slider-title">' + self.imageUrls[index].title + '</span></div>').appendTo(this);
            $('<div><span class="slider-description">' + self.imageUrls[index].description + '</span></div>').appendTo(this);
            $('<div><button class="slider-button">' + self.imageUrls[index].button + '</button></div>').appendTo(this);
        });
    }


    ngOnInit() {
    }

}
