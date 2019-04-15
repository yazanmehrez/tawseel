import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-investor',
    templateUrl: './investor.component.html',
    styleUrls: ['./investor.component.css']
})
export class InvestorComponent implements OnInit {

    constructor(public _appService: AppService) {
    }

    ngOnInit() {
    }

}
