import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {DeviceDetectorService} from 'ngx-device-detector';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    navbar = [];

    constructor(public _appService: AppService, private deviceService: DeviceDetectorService,
                private translateService: TranslateService) {

        this.translateService.onLangChange.subscribe(lang => {
            this.getNavBarData();
        });
    }

    getNavBarData() {
        this._appService.api.getNavBarService().subscribe(response => {
            this.navbar = response['payload'];

            this.navbar.forEach(item => {
                if (item.UniqueName == 'home') {

                    this._appService.topImage = item.MainImageFullURL;
                    this._appService.timeWork = item.Content;
                }
            });
        });
    }

    goToRoute() {
        if (this.deviceService.isMobile()) {
            scrollTo(0, 500);
        }
    }


    ngOnInit() {
        this.getNavBarData();
    }

}
