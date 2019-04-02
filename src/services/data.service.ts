import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private api: ApiService) {
    }

    getNavBarService(): Observable<Object> {
        return this.api.getNavBar('navbar',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByCategoryUniqueName);
    }

    getHomePageService(): Observable<Object> {
        return this.api.getHomePage('homepage',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByCategoryUniqueName);
    }

    getMainSliderService(): Observable<Object> {
        return this.api.getMainSlider('mainslideshow',
            environment.API_Generic_Content.ServiceName,
            environment.API_Generic_Content.GetGenericContentByUniqueName);
    }

}

