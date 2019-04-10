import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {TranslateService} from '@ngx-translate/core';
import {News} from '../../../classes/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public news = new News();

    constructor(private translateService: TranslateService,
                public _appService: AppService ) {
        this.translateService.onLangChange.subscribe(lang => {
            this._appService.loading = true;
            this.getNews(0);
        });
    }

    getNews(pageNumber) {
        this.news.pageNumber = pageNumber;
        // this.activePage = this.news.pageNumber;
        // this.mediaCenterService.title = 'news';
        this._appService.api.getNewsService(this.news)
            .subscribe(response => {
            //     this.newsList = response.Records;
            //     this.pageCount = Math.ceil(this.totalNews / this.news.pageSize);
            //     this.pageCountArray = [];
            //     for (let i = 1; i <= this.pageCount; i++) {
            //         this.pageCountArray.push(i);
            //     }
            //     setTimeout(() => {
            //         this.loading = false;
            //     }, 2000);
            //
            });
    }


  ngOnInit() {
this.getNews(0);

  }

}
