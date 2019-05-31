import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    visitor: any;
    lastUpdate: any;

    constructor(public _appService: AppService) {
    }

    scrollUp() {
        window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    }

    getTotalVisitor() {
        this._appService.api.getVisitorTotal().subscribe(response => {
            this.visitor = response;

        });
    }

    GetLatestModificationDate() {
        this._appService.api.getLatestModificationDate().subscribe(response => {
            this.lastUpdate = response;

        });
    }

    ngOnInit() {

        this.getTotalVisitor();
        this.GetLatestModificationDate();
    }

}



