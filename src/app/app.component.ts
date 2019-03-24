import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    styles = {
        bootstrap: '',
        style: ''
    };

    constructor(public _appService: AppService, public sanitizer: DomSanitizer) {

    }

    ngOnInit() {
        this._appService.language.subscribe(language => {
            this._appService.currentLanguage = language === 'en' ? 'en' : 'ar';
            switch (language) {
                case 'en':
                    this.styles.bootstrap = 'assets/css/ltr/bootstrap.min.css';
                    this.styles.style = 'assets/css/ltr/style.css';
                    break;
                case 'ar':
                    this.styles.bootstrap = 'assets/css/rtl/bootstrap-ar.css';
                    this.styles.style = 'assets/css/rtl/style.css';
                    break;
            }
        });
    }
}


