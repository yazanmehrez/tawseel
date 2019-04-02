import {Injectable, isDevMode} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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

    getNavBar(data, ServiceName: string, Type: string): Observable<Object> {
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

    getHomePage(data, ServiceName: string, Type: string): Observable<Object> {
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

    getMainSlider(data, ServiceName: string, Type: string): Observable<Object> {
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

}
