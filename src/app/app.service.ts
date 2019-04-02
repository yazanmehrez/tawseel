import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject} from 'rxjs';
import {ApiService} from '../services/api.service';
import {DataService} from '../services/data.service';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public language = new BehaviorSubject<string>(null);
    currentLanguage: string;

    constructor(private translate: TranslateService, public api: DataService) {
        if (!localStorage.getItem('language')) {
            localStorage.setItem('language', 'en');
        }
        translate.setDefaultLang('en');
        const browserLang = localStorage.getItem('language');
        translate.use(browserLang.match(/en|ar/) ? browserLang : 'ar');
        this.language.next(browserLang);
    }

    /* Switch Language */
    switchLanguage(language: string) {
        $('.dropdown-menu').removeClass('show');
        this.translate.use(language);
        if (language === 'en') {
            this.language.next('en');
            localStorage.setItem('language', language);
        } else if (language === 'ar') {
            this.language.next('ar');
            localStorage.setItem('language', language);
        }
    }
}
