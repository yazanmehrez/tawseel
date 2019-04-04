import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../app.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
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

    constructor(private translateService: TranslateService,
                public _appService: AppService,
    ) {
        this.translateService.onLangChange.subscribe(lang => {
            this.getMainSliderData();
            this.getHomePageData();
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

    getHomePageData() {
        this.appendNews = false;
        this.appendXslider = false;
        this._appService.api.getHomePageService().subscribe(response => {
            this.newsSlider = response['payload'][0]['RelatedEntities'];
            this.xSlider = response['payload'][1]['RelatedEntities'];
            this.videoSlider = response['payload'][2]['RelatedEntities'];
        }, (error) => console.log(error), () => {
            this.appendNews = true;
            this.appendXslider = true;
        });
    }


    getAboutData() {
        this._appService.api.getAboutDataHome().subscribe(response => {
            this.about = response['payload'][0];
        });
    }

    ngOnInit() {
        this.getMainSliderData();
        this.getHomePageData();
        this.getAboutData();
    }
}
