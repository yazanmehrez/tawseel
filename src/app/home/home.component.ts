import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    sliderData = [
        {url: 'assets/images/banner3.jpg', id: 0, title: 'SERVICE', description: 'Services at your doorstp', button: 'Learn More'},
        {url: 'assets/images/banner2.jpg', id: 1, title: 'PRODUCTS', description: 'PRODUCTS at your doorstp', button: 'Learn More'},
        {url: 'assets/images/banner1.jpg', id: 2, title: 'OTHER', description: 'OTHER at your doorstp', button: 'Learn More'}
    ];

    constructor(private translateService: TranslateService) {
    }

    ngOnInit() {
        this.translateService.onLangChange.subscribe(lang => {
            console.log(lang);
        });
    }
}
