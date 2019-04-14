import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../app.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {News} from '../../../classes/news';
import {DatePipe} from '@angular/common';

@Component({
    providers: [DatePipe],
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('fadeInOut', [
            state('void', style({
                opacity: 0
            })),
            transition('void => *', animate(1000)),
        ]),
    ]
})
export class HomeComponent implements OnInit {

    appendSlider: boolean = false;
    appendNews: boolean = false;
    appendXslider: boolean = false;
    videoIndex: number = 0;
    mainSlider = [];
    newsSlider = [];
    xSlider = [];
    videoSlider = [];
    public about: any;

    public news = new News();
    private startDate: any;
    private endDate: any;
    minDate = new Date(2000, 0, 1);
    maxDate = new Date();


    constructor(private translateService: TranslateService,
                public _appService: AppService,
                private translate: TranslateService,
                public datePipe: DatePipe,
    ) {
        this.translateService.onLangChange.subscribe(lang => {
            this.getMainSliderData();
            this.searchNews(0);
            this.getAboutData();
        });


    }


    getMainSliderData() {
        this.appendSlider = false;
        this._appService.api.getMainSliderService().subscribe(response => {
            this.mainSlider = response['payload'][0]['RelatedEntities'];
            this.mainSlider.forEach(item => {
                item['url'] = item['FullUrl'];
            });
        }, (error) => (console.log(error)), () => {
            this.appendSlider = true;
        });
    }

    // getHomePageData() {
    //     this.appendNews = false;
    //     this.appendXslider = false;
    //     this._appService.api.getHomePageService().subscribe(response => {
    //         this.newsSlider = response['payload'][0]['RelatedEntities'];
    //         this.xSlider = response['payload'][1]['RelatedEntities'];
    //         this.videoSlider = response['payload'][2]['RelatedEntities'];
    //     }, (error) => console.log(error), () => {
    //         this.appendNews = true;
    //         this.appendXslider = true;
    //     });
    // }


    searchNews(pageNumber) {
        this.appendNews = false;
        this.appendXslider = false;
        this.startDate = this.news.startDate;
        this.endDate = this.news.endDate;
        this.news.startDate = this.datePipe.transform(this.news.startDate, 'MM/dd/yyyy') ? this.datePipe.transform(this.news.startDate, 'MM/dd/yyyy') : this.datePipe.transform(this.minDate, 'MM/dd/yyyy');
        this.news.endDate = this.datePipe.transform(this.news.endDate, 'MM/dd/yyyy') ? this.datePipe.transform(this.news.endDate, 'MM/dd/yyyy') : this.datePipe.transform(this.maxDate, 'MM/dd/yyyy');

        this.news.pageNumber = pageNumber;
        this._appService.api.getNewsService(this.news)
            .subscribe(response => {
                    this._appService.loading = false;
                    this.newsSlider = response['Records'];

                },
                (error) => console.log(error), () => {
                    this.appendNews = true;
                    this.appendXslider = true;
                });
        this.news.startDate = this.startDate;
        this.news.endDate = this.endDate;

    }



    getAboutData() {
        this._appService.api.getAboutDataHome().subscribe(response => {
            this.about = response['payload'][0];
        });
    }

    ngOnInit() {
        this.getMainSliderData();
        this.searchNews(0);
        this.getAboutData();
    }
}
