import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {


    mainSlider = [];
    id: string;
    contentMore: any;

    constructor(public _appService: AppService,
                private route: ActivatedRoute,
                private translateService: TranslateService,) {
        this.translateService.onLangChange.subscribe(lang => {
            this.getMainSliderData();

        });
    }

    getMainSliderData() {
        // this.appendSlider = false;
        this._appService.api.getMainSliderService().subscribe(response => {
            this.mainSlider = response['payload'][0]['RelatedEntities'];
            this.mainSlider.forEach(item => {
                if (item.ID == this.id) {
                    this.contentMore = item;
                }
            });
        }, (error) => (console.log(error)), () => {
            // this.appendSlider = true;
        });
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
            this.getMainSliderData();
        });

    }

}
