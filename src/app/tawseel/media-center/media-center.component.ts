import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {News} from '../../../classes/news';
import {DatePipe} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Component({
    providers: [DatePipe],
    selector: 'app-media-center',
    templateUrl: './media-center.component.html',
    styleUrls: ['./media-center.component.css'],
    animations: [
        trigger('fadeInOut', [
            state('void', style({
                opacity: 0
            })),
            transition('void => *', animate(1000)),
        ]),
    ]
})
export class MediaCenterComponent implements OnInit {
    appendSlider: boolean = false;
    appendNews: boolean = false;
    appendXslider: boolean = false;
    videoIndex: number = 0;
    videoIndex1: number = 0;
    videoIndex2: number = 0;
    mainSlider = [];
    newsSlider = [];
    newsListSlider = [];
    xSlider = [];
    videoSlider = [];
    public feedback: any;
    public services: any;


    public news = new News();
    private startDate: any;
    private endDate: any;
    minDate = new Date(2000, 0, 1);
    maxDate = new Date();


    constructor(public _appService: AppService,
                public datePipe: DatePipe,
                private translateService: TranslateService) {
        this.news.pageSize = 10;
        this.news.pageNumber = 0;

        this.translateService.onLangChange.subscribe(lang => {
            this._appService.loading = true;
            this.getHomePageData();
            this.getMediaCenter();
            this.searchNews(0);
        });

    }

    getHomePageData() {
        this.appendNews = false;
        this.appendXslider = false;
        this._appService.api.getHomePageService().subscribe(response => {
            this.newsSlider = response['payload'][0]['RelatedEntities'];
            this.xSlider = response['payload'][1]['RelatedEntities'];
            this.videoSlider = response['payload'][2]['RelatedEntities'];
        }, (error) => console.log(error), () => {
            // this.appendNews = true;
            this.appendXslider = true;
        });
    }


    getMediaCenter() {
        this._appService.api.getMediaCenterService().subscribe(response => {

            response['payload'].forEach(item => {
                if (item.UniqueName == 'services') {
                    this.services = item;

                } else if (item.UniqueName == 'customers.feedback') {
                    this.feedback = item;

                }
            });

            setTimeout(() => {
                this._appService.loading = false;
            }, 1000);

        });
    }

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
                this.newsListSlider = response['Records'];

            },
                (error) => console.log(error), () => {
                    this.appendNews = true;
                    this.appendXslider = true;
                });
        this.news.startDate = this.startDate;
        this.news.endDate = this.endDate;

    }

    ngOnInit() {
        this.getHomePageData();
        this.getMediaCenter();
        this.searchNews(0);
    }

}
