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
            url: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-0.3.5&s=739aef35459daa8aaeaa55363d492bc1&auto=format&fit=crop&w=673&q=80',
            title: 'We Are Launching TAWSEEL Services',
            desc: 'This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.'
        },
        {
            url: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-0.3.5&s=739aef35459daa8aaeaa55363d492bc1&auto=format&fit=crop&w=673&q=80',
            title: 'title2',
            desc: 'description2'
        },
        {
            url: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-0.3.5&s=739aef35459daa8aaeaa55363d492bc1&auto=format&fit=crop&w=673&q=80',
            title: 'We Are Launching TAWSEEL Services',
            desc: 'This website stores cookies on your computer. metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.'
        },
        {
            url: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-0.3.5&s=739aef35459daa8aaeaa55363d492bc1&auto=format&fit=crop&w=673&q=80',
            title: 'title4',
            desc: 'description4'
        },
        {
            url: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-0.3.5&s=739aef35459daa8aaeaa55363d492bc1&auto=format&fit=crop&w=673&q=80',
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
