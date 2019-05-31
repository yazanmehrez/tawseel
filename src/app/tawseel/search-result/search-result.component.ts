import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../app.service';
import {ActivatedRoute} from '@angular/router';
import {News} from '../../../classes/news';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public images: any;
  public search = new News();
  private pageSize: number;
  private pageNumber: number;
  public totalImages: number;
  public pageCount: number;
  public pageCountArray: any = [];
  public activePage: number;
  public result: any;
  public startPage = 0;
  public endPage = 10;
  public loading: boolean;
  constructor(public _appService: AppService,
              private translateService: TranslateService,
              private activatedRoute: ActivatedRoute,
             ) {
    this.search.pageSize = 5;
    this.search.pageNumber = 0;
    this.search.categoryID = 0;

    this.translateService.onLangChange.subscribe(lang => {
      this._appService.loading = true;
      this.geSearchResult(0);
    });
  }

  geSearchResult(pageNumber) {
    this.search.pageNumber = pageNumber;
    this.activePage = this.search.pageNumber ;
    this._appService.api.getSearchResult(this.search)
        .subscribe(response => {
          this.result = response['payload'];
          this.totalImages = response['TotalRecords'];
          this.pageCount = Math.ceil(this.totalImages / this.search.pageSize);
          this.pageCountArray = [];
          for (let i = 1; i <= this.pageCount; i++) {
            this.pageCountArray.push(i);
          }

          setTimeout(() => {
            this.loading = false;
          }, 2000);

        });
  }

  nextPage(){

    if(this.pageCount != this.endPage) {
      this.endPage = this.endPage + 1;
      this.startPage = this.startPage + 1

    }

  }

  previousePage(){

    if( this.startPage != 0) {
      this.endPage = this.endPage - 1;
      this.startPage = this.startPage - 1
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.search.keyword = this.activatedRoute.snapshot.params.id;
      this.geSearchResult(0);
    });
  }

}
