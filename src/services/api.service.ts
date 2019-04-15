import {Injectable, isDevMode} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {News} from '../classes/news';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiURL: string;

    constructor(private http: HttpClient) {
        this.getAbsoluteDomainUrl();
    }

    public getAbsoluteDomainUrl(): string {
        if (isDevMode()) {
            this.apiURL = 'http://demoserver.tacme.net:3030/';
        } else {
            if (window
                && 'location' in window
                && 'protocol' in window.location
                && 'host' in window.location) {
                this.apiURL = 'http://demoserver.tacme.net:3030/';
            }
        }
        return null;
    }



    getGeneralPage(data, ServiceName: string, Type: string): Observable<Object> {
        const headers = new HttpHeaders();
        const lang = localStorage.getItem('language') === 'en' ? 1 : 2;
        headers.append('Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8');
        return this.http.get(
            this.apiURL + 'TawseelTacsoft/Services/'
            + ServiceName + '/' + Type + '?WebsiteID=1&LanguageID='
            + lang + '&uniqueName=' + data, {
                headers: headers
            }).pipe(map(res => res));
    }


    public getNewsPage(news: News, ServiceName: string, Type: string): Observable<any> {

        const headers = new HttpHeaders();
        const lang = localStorage.getItem('language') === 'en' ? 1 : 2;
        headers.append('Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8');

        if (news.keyword) {
            return this.http.get(
                this.apiURL + 'TawseelTacsoft/Services/'
                + ServiceName + '/' + Type + '?websiteID=1&languageID=' + lang + '&PageSize=' + news.pageSize + '&pageNumber=' + news.pageNumber + '&Keyword=' + news.keyword + '&EndDate=' + news.endDate + '&StartDate=' + news.startDate + '&CategoryID=' + news.categoryID, {
                    headers: headers
                }).pipe(map(res => res));


        }else{

            return this.http.get(
                this.apiURL + 'TawseelTacsoft/Services/'
                + ServiceName + '/' + Type + '?websiteID=1&languageID=' + lang + '&PageSize=' + news.pageSize + '&pageNumber=' + news.pageNumber + '&EndDate=' + news.endDate + '&StartDate=' + news.startDate + '&CategoryID=' + news.categoryID, {
                    headers: headers
                }).pipe(map(res => res));


            // return this.http.get(
            //     this.apiURL + 'TawseelTacsoft/Services/'
            //     + ServiceName + '/' + Type + '?websiteID=1&languageID=' + lang + '&PageSize=' + news.pageSize + '&pageNumber=' + news.pageNumber + '&CategoryID=' + news.categoryID, {
            //         headers: headers
            //     }).pipe(map(res => res));

        }

    }

    sendFeedback(data, ServiceName: string, Type: string): Observable<any> {
        const headers = new HttpHeaders();
        const lang = localStorage.getItem('language') === 'en' ? 1 : 2;
        headers.append('Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8');

        return this.http.get(this.apiURL + 'TawseelTacsoft/Services/'
            + ServiceName + '/' + Type + '?clientToNotify=1&WebsiteID=1&LanguageID=' + lang + '&Name= ' + data.name + '&Email=' + data.email + '&Phone=' + data.phone + '&FeedType=' + data.FeedType + '&description=' + data.description  + '&Emirate=' + data.emirate, {
            headers: headers
        }).pipe(map(res => res));

    }
}
