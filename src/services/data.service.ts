import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {News} from '../classes/news';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private api: ApiService) {
    }

    getNavBarService(): Observable<Object> {
        return this.api.getGeneralPage('navbar',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByCategoryUniqueName);
    }

    getHomePageService(): Observable<Object> {
        return this.api.getGeneralPage('homepage',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByCategoryUniqueName);
    }

    getMainSliderService(): Observable<Object> {
        return this.api.getGeneralPage('mainslideshow',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByUniqueName);
    }


    getAboutService(): Observable<Object> {
        return this.api.getGeneralPage('about',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByCategoryUniqueName);
    }



    getCustomerService(): Observable<Object> {
        return this.api.getGeneralPage('our.customers',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByUniqueName);
    }


    getAboutDataHome(): Observable<Object> {
        return this.api.getGeneralPage('your.fast.way.for.mohre.services',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByUniqueName);
    }



    getTermsConditionsService(): Observable<Object> {
        return this.api.getGeneralPage('terms.conditions',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByCategoryUniqueName);
    }



    getContactDataService(): Observable<Object> {
        return this.api.getGeneralPage('contact.us',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByCategoryUniqueName);
    }


    getNewsService(news: News): Observable<Object> {
        return this.api.getNewsPage(news,
            environment.API_News_Content.ServiceName,
            environment.API_News_Content.GetNewsBySearchPaged);
    }


    getDetailsService(id: string): Observable<Object> {
        return this.api.getGeneralPage( id,
            environment.API_News_Content.ServiceName,
            environment.API_News_Content.GetNewsByUniqueName);
    }




}

