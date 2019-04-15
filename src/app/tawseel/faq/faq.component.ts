import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

    public dealingSevices: any = [];
    public licences: any = [];

    constructor(private translateService: TranslateService, public _appService: AppService) {
        this.translateService.onLangChange.subscribe(lang => {
            this._appService.loading = true;
            this.getFAQDealingData();
            this.getFAQLicenceData();
        });
    }

    getFAQDealingData() {
        this._appService.api.getFAQDealingService().subscribe(response => {

            this.dealingSevices = response;

            setTimeout(() => {
                this._appService.loading = false;
            }, 1000);

        });
    }

    getFAQLicenceData() {
        this._appService.api.getFAQLicenceService().subscribe(response => {

            this.licences = response;

            setTimeout(() => {
                this._appService.loading = false;
            }, 1000);

        });
    }


    ngOnInit() {
        window.scrollTo(0, 0);
        this.getFAQDealingData();
        this.getFAQLicenceData();
    }

}
