import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-media-center',
    templateUrl: './media-center.component.html',
    styleUrls: ['./media-center.component.css']
})
export class MediaCenterComponent implements OnInit {
    appendSlider: boolean = false;
    appendNews: boolean = false;
    appendXslider: boolean = false;
    videoIndex: number = 0;
    mainSlider = [];
    newsSlider = [];
    xSlider = [];
    videoSlider = [];

    constructor(public _appService: AppService) {
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

    ngOnInit() {
        this.getHomePageData();
    }

}
