import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject} from 'rxjs';
import {DataService} from '../services/data.service';
import {st} from '@angular/core/src/render3';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public language = new BehaviorSubject<string>(null);
    currentLanguage: string;
    topImage: string;
    timeWork: string;
    public  loading: boolean = false;

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


    getNormalDate(news_date: any) {
        // Get the number parts
        const s = news_date;
        const b = s.match(/\d+/g);

        // Get the sign of the offset
        const sign = /-/.test(s) ? -1 : +1;

        // Adjust the time value by the offset converted to milliseconds
        // and use to create a Date
        return +b[0] + sign * (b[1].slice(0, 2) * 3.6e6 + b[1].slice(-2) * 6e4);
    }
}
