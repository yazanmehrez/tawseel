import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../app/app.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-slideshow',
    templateUrl: './app-slideshow.component.html',
    styleUrls: ['./app-slideshow.component.css']
})
export class AppSlideshowComponent implements AfterViewInit {
    @ViewChild('slideshow') private slideshow: any;
    @Input() imageUrls;
    private trans = {
        readMore: null,

    };

    constructor(private translate: TranslateService ,
                private _appService: AppService ,
                private router: Router) {
        translate.get(['_ReadMore']).subscribe(res => {
            this.trans.readMore = res._ReadMore;

        });
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
            $('<div><span class="slider-title">' + self.imageUrls[index].Title + '</span></div>').appendTo(this);
            $('<div><span class="slider-description">' + self.imageUrls[index].Description + '</span></div>').appendTo(this);
            $('<div><div class="read-more learn-more" id="' + self.imageUrls[index].ID + '"><button><span>Learn More</span><img src="assets/images/arrow-read-more.png"></button></div></div>').appendTo(this);
        });

        $(document).on('click', '.read-more', (event) => {
            var id = $(event.currentTarget).attr('id');
            this.router.navigate(['/more/' + id]);

        });

        // let element : HTMLElement = document.getElementById(this.imageUrls[])

        $('.learn-more span').text(this.trans.readMore);
    }
}
