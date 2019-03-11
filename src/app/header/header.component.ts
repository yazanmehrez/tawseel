import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(public _appService: AppService) {
    }

    ngOnInit() {
    }

}
