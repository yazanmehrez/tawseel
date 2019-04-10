import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    public contact: any;

    constructor(private translateService: TranslateService, public _appService: AppService) {
        this.translateService.onLangChange.subscribe(lang => {
            this._appService.loading = true;
            this.getContactData();

        });
    }

    getContactData() {
        this._appService.api.getContactDataService().subscribe(response => {
            this.contact = response['payload'][0];
            setTimeout(() => {
                this._appService.loading = false;
            }, 1000);

        });
    }


    ngOnInit() {
        window.scrollTo(0,0);
        this.getContactData();
    }


}
