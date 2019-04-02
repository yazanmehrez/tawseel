import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    navbar = [];

    constructor(public _appService: AppService, private deviceService: DeviceDetectorService) {
    }

    getNavBarData() {
        this._appService.api.getNavBarService().subscribe(response => {
            this.navbar = response['payload'];
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
