import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements OnInit {

    public conditions: any = [];

    constructor(private translateService: TranslateService, public _appService: AppService) {
        this.translateService.onLangChange.subscribe(lang => {
            this._appService.loading = true;
            this.getTermsConditionsData();
        });
    }

    getTermsConditionsData() {
        this._appService.api.getTermsConditionsService().subscribe(response => {
          this.conditions = response['payload'][0];
            setTimeout(() => {
                this._appService.loading = false;
            }, 1000);

        });
    }

    ngOnInit() {
        this.getTermsConditionsData();
    }



}
