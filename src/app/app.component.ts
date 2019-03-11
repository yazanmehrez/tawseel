import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


    constructor(public _appService: AppService, public sanitizer: DomSanitizer) {

    }

    ngOnInit() {
        this._appService.language.subscribe(language => {
            this._appService.currentLanguage = language === 'en' ? 'en' : 'ar';
        });
    }
}


