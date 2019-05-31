import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {News} from '../classes/news';
import {Contact} from '../classes/contact';

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
        return this.api.getGeneralPage('our.customer',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByCategoryUniqueName);
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
        return this.api.getGeneralPage(id,
            environment.API_News_Content.ServiceName,
            environment.API_News_Content.GetNewsByUniqueName);
    }

    sendFeedbackService(data: Contact): Observable<Object> {
        return this.api.sendFeedback(data,
            environment.API_Feedback_Content.ServiceName,
            environment.API_Feedback_Content.SendFeedBackToClient);
    }


    getMediaCenterService(): Observable<Object> {
        return this.api.getGeneralPage('media.center',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByCategoryUniqueName);
    }

    getFAQDealingService(): Observable<Object> {
        return this.api.getGeneralPage('dealing',
            environment.API_FAQ_Content.ServiceName,
            environment.API_FAQ_Content.SendFeedBackToClient);
    }

    getFAQLicenceService(): Observable<Object> {
        return this.api.getGeneralPage('licensing',
            environment.API_FAQ_Content.ServiceName,
            environment.API_FAQ_Content.SendFeedBackToClient);
    }

    getVisitorTotal(): Observable<Object> {
        return this.api.getVisitorPage(
            environment.API_Helper_Content.ServiceName,
            environment.API_Helper_Content.GetVisitorCount);
    }


    getLatestModificationDate(): Observable<Object> {
        return this.api.getVisitorPage(
            environment.API_Helper_Content.ServiceName,
            environment.API_Helper_Content.GetLatestModificationDate);
    }


    getSearchResult(data: News): Observable<Object> {
        return this.api.getSearchResultPage(data ,
        environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentBySearchPaged
        );

    }


}

