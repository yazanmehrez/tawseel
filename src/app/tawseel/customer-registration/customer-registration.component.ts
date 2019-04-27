import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {BsDatepickerConfig} from 'ngx-bootstrap';

@Component({
    selector: 'app-customer-registration',
    templateUrl: './customer-registration.component.html',
    styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
    maxDate = new Date(2000, 1 - 1, 1);
    myDateValue = new Date();
    bsConfig: Partial<BsDatepickerConfig>;
    agree = false;

    constructor(public _appService: AppService) {
    }

    ngOnInit() {
        this.bsConfig = Object.assign({}, {containerClass: 'theme-orange'});
        scrollTo(0, 0);
    }

}
