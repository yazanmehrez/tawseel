import {Component, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
    selector: 'app-swiper',
    templateUrl: './app-swiper.component.html',
    styleUrls: ['./app-swiper.component.css']
})
export class AppSwiperComponent implements OnInit {

    indexInformation: number = 2;

    public config: SwiperConfigInterface = {
        direction: 'horizontal',
        grabCursor: true,
        initialSlide: 2,
        slidesPerView: 6,
        keyboard: false,
        mousewheel: false,
        scrollbar: false,
        navigation: false,
        pagination: false,
        centeredSlides: true,
        spaceBetween: 30,
        breakpoints: {
            // when window width is <= 1200px
            976: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }

    };

    slides = [
        {
            url: 'assets/images/t1.jpg',
            title: 'We Are Launching TAWSEEL Services',
            desc: 'This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.'
        },
        {
            url: 'assets/images/t2.jpg',
            title: 'title2',
            desc: 'description2'
        },
        {
            url: 'assets/images/t3.jpg',
            title: 'We Are Launching TAWSEEL Services',
            desc: 'This website stores cookies on your computer. metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.'
        },
        {
            url: 'assets/images/t4.jpg',
            title: 'title4',
            desc: 'description4'
        },
        {
            url: 'assets/images/t1.jpg',
            title: 'title5',
            desc: 'description5'
        }
    ];

    getIndex(index) {
        this.indexInformation = index;
    }

    constructor() {
    }

    ngOnInit() {

    }

}
