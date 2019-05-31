import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-privacy-statment',
  templateUrl: './privacy-statment.component.html',
  styleUrls: ['./privacy-statment.component.css']
})
export class PrivacyStatmentComponent implements OnInit {

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
