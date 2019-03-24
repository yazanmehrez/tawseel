import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    constructor() {
    }

    scrollUp() {
        window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    }

    ngOnInit() {
    }
}
