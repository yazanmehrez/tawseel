import {Component, OnInit, TemplateRef} from '@angular/core';
import {AppService} from './app.service';
import {ngxLoadingAnimationTypes} from 'ngx-loading';



const PrimaryWhite = '#f7d231';
const SecondaryGrey = '#ccc';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
    public loading = true;
    public primaryColour = PrimaryWhite;
    public secondaryColour = SecondaryGrey;
    public loadingTemplate: TemplateRef<any>;
    public config = { animationType: ngxLoadingAnimationTypes.none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };
    styles = {
        bootstrap: '',
        style: '',
        responsive: '',
        components: ''
    };

    constructor(public _appService: AppService) {

    }


    ngOnInit() {
        this._appService.language.subscribe(language => {
            this._appService.currentLanguage = language === 'en' ? 'en' : 'ar';
            switch (language) {
                case 'en':
                    this.styles.bootstrap = 'assets/css/ltr/bootstrap.min.css';
                    this.styles.style = 'assets/css/ltr/style.css';
                    this.styles.components = 'assets/css/ltr/components.css';
                    this.styles.responsive = 'assets/css/ltr/responsive.css';
                    break;
                case 'ar':
                    this.styles.bootstrap = 'assets/css/rtl/bootstrap-ar.css';
                    this.styles.style = 'assets/css/rtl/style.css';
                    this.styles.components = 'assets/css/rtl/components.css';
                    this.styles.responsive = 'assets/css/rtl/responsive.css';
                    break;
            }
        });
    }
}


