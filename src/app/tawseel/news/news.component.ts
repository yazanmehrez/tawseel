import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {TranslateService} from '@ngx-translate/core';
import {News} from '../../../classes/news';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {DatePipe} from '@angular/common';

@Component({
    providers: [DatePipe],
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    // maxDate = new Date(2000, 1 - 1, 1);
    myDateValue = new Date();
    bsConfig: Partial<BsDatepickerConfig>;
    public news = new News();
    public newsList: any = [];
    public pageCount: number;
    public activePage: number;
    public totalNews: number;
    public pageCountArray: any = [];
    public startPage = 0;
    public endPage = 5;
    private startDate: any;
    private endDate: any;
    minDate = new Date(2000, 0, 1);
    maxDate = new Date();



    constructor(private translateService: TranslateService,
                public _appService: AppService,
                public datePipe: DatePipe) {
        this.news.pageSize = 5;
        this.news.pageNumber = 0;
        this.translateService.onLangChange.subscribe(lang => {
            this._appService.loading = true;
            this.searchNews(0);
        });
    }

    getNews(pageNumber) {
        this.news.pageNumber = pageNumber;
        this.activePage = this.news.pageNumber;
        // this.mediaCenterService.title = 'news';
        this._appService.api.getNewsService(this.news)
            .subscribe(response => {
                this.newsList = response['Records'];
                this.totalNews = response['TotalRecords'];
                this.pageCount = Math.ceil(this.totalNews / this.news.pageSize);

                // this.pageCount = 10;
                this.pageCountArray = [];
                for (let i = 1; i <= this.pageCount; i++) {
                    this.pageCountArray.push(i);
                }
                setTimeout(() => {
                    this._appService.loading = false;
                }, 1000);

            });
    }


    nextPage() {

        if (this.pageCount != this.endPage) {
            this.endPage = this.endPage + 1;
            this.startPage = this.startPage + 1;

        }

    }

    previousPage() {

        if (this.startPage != 0) {
            this.endPage = this.endPage - 1;
            this.startPage = this.startPage - 1;
        }
    }


    searchNews(pageNumber) {

        this.startDate = this.news.startDate;
        this.endDate = this.news.endDate;
        this.news.startDate = this.datePipe.transform(this.news.startDate, 'yyyy/MM/dd') ? this.datePipe.transform(this.news.startDate, 'yyyy/MM/dd') : this.datePipe.transform(this.minDate, 'yyyy/MM/dd');
        this.news.endDate = this.datePipe.transform(this.news.endDate, 'yyyy/MM/dd') ? this.datePipe.transform(this.news.endDate, 'yyyy/MM/dd') : this.datePipe.transform(this.maxDate, 'yyyy/MM/dd');

        this.news.pageNumber = pageNumber;
        this.activePage = this.news.pageNumber;
        this._appService.api.getNewsService(this.news)
            .subscribe(response => {
                this._appService.loading = false;
                this.newsList = response['Records'];
                this.totalNews = response['TotalRecords'];
                this.pageCount = Math.ceil(this.totalNews / this.news.pageSize);
                this.pageCountArray = [];
                for (let i = 1; i <= this.pageCount; i++) {
                    this.pageCountArray.push(i);
                }
            });
        this.news.startDate = this.startDate;
        this.news.endDate = this.endDate;

    }


    getAllNews() {
        if (this.news.keyword == '') {
            this.searchNews(0);
        }

    }

    ngOnInit() {
        this.searchNews(0);
        this.bsConfig = Object.assign({}, {containerClass: 'theme-orange'});
    }

}
