import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    public details: any;
    public id: string;
    public news_date: any;
    public uniqueName: any;

    constructor(private translateService: TranslateService,
                public _appService: AppService,
                private route: ActivatedRoute) {
        this.translateService.onLangChange.subscribe(lang => {
            this._appService.loading = true;
            this.getNewsDetails();
        });
    }


    getNewsDetails() {
        this._appService.api.getDetailsService(this.uniqueName)
            .subscribe(response => {
                this.details = response;
                this.news_date = this.details.NewsDate;
                // this.news_date = this._appService.getNormalDate(this.news_date);
                // setTimeout(() => {                     this.loading = false;                 }, 2000)


            });
    }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.uniqueName = params['id']; // (+) converts string 'id' to a number
          this.getNewsDetails();
      });


  }

}
