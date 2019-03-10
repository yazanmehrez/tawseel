import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public language = new BehaviorSubject<string>(null);
    currentLanguage: string;

    constructor(private translate: TranslateService) {
        if (!localStorage.getItem('language')) {
            localStorage.setItem('language', 'ar');
        }
        translate.setDefaultLang('en');
        const browserLang = localStorage.getItem('language');
        translate.use(browserLang.match(/en|ar/) ? browserLang : 'ar');
        this.language.next(browserLang);
    }

    /* Switch Language */
    switchLanguage(language: string) {
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
