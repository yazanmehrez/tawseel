import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject} from 'rxjs';
import {DataService} from '../services/data.service';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public language = new BehaviorSubject<string>(null);
    currentLanguage: string;

    constructor(private translate: TranslateService, public api: DataService) {

        /** Language Configurations **/
        if (!localStorage.getItem('language')) {
            localStorage.setItem('language', 'en');
        }
        const browserLang = localStorage.getItem('language');
        translate.setDefaultLang(browserLang.match(/en|ar/) ? browserLang : 'en');
        this.language.next(browserLang);
    }

    /* Switch Language */
    switchLanguage(language: string) {
        localStorage.setItem('language', language);
        $('.dropdown-menu').removeClass('show');
        this.translate.use(language);
        this.language.next(language);
    }
}
