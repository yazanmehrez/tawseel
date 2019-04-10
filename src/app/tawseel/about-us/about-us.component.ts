import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
    public services: any;
    public about: any;


    constructor(private translateService: TranslateService, public _appService: AppService) {
        this.translateService.onLangChange.subscribe(lang => {
            this._appService.loading = true;
            this.getAboutData();
        });
    }

    getAboutData() {
        this._appService.api.getAboutService().subscribe(response => {

            response['payload'].forEach(item => {
                if (item.UniqueName == 'who.we.are') {
                    this.about = item;

                } else if (item.UniqueName == 'your.fast.way.for.mohre.services') {
                    this.services = item;

                }
            });

            setTimeout(() => {
                this._appService.loading = false;
            }, 1000);

        });
    }

    ngOnInit() {
        window.scrollTo(0,0);
        this.getAboutData();
    }


}
