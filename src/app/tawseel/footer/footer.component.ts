import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    constructor(public _appService: AppService) {
    }

    scrollUp() {
        window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    }

    ngOnInit() {
    }
}
