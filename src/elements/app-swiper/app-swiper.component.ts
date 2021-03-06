import {Component, Input} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {AppService} from '../../app/app.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-swiper',
    templateUrl: './app-swiper.component.html',
    styleUrls: ['./app-swiper.component.css']
})
export class AppSwiperComponent {
    @Input() imageUrls;
    indexInformation: number = 2;

    public config: SwiperConfigInterface = {
        slidesPerView: 6,
        centeredSlides: true,
        spaceBetween: 15,
        slideToClickedSlide: true,
        breakpoints: {
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 4
            }
        }
    };

    constructor(public _appService: AppService) {


    }

    getIndex(index) {
        this.indexInformation = index;
    }

}
