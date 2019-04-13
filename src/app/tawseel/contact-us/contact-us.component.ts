import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {TranslateService} from '@ngx-translate/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../../../classes/contact';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    public contact: any = [];
    public feedback = new Contact();
    public feedbackForm: FormGroup;
    private trans = {
        feedbackError: null,
        feedbackSuccess: null,

    };
    private isEmail: any = /^[\w\-\.]{2,}\@[a-zA-Z-0-9]{2,}\.[\w\-]{2,4}$/;

    constructor(private translateService: TranslateService,
                public _appService: AppService,
                private fb: FormBuilder,
                private translate: TranslateService,
                private toastrService: ToastrService,) {
        this.feedback.FeedType = 'Comment';
        translate.get(['_FeedbackError', '_FeedbackSuccess']).subscribe(res => {
            this.trans.feedbackError = res._FeedbackError;
            this.trans.feedbackSuccess = res._FeedbackSuccess;

        });
        this.feedbackForm = fb.group({

            'name': [null, Validators.required],
            'email': [null, [Validators.required, Validators.pattern(this.isEmail)]],
            'phone': [null, Validators.compose([Validators.required, Validators.minLength(14), Validators.maxLength(14)])],
            'message': [null, Validators.required],
            // 'emirate': '',
        });


        this.translateService.onLangChange.subscribe(lang => {
            // this._appService.loading = true;
            this.getContactData();

        });
    }

    sendFeedback() {
        this._appService.loading = true;
        this.toastrService.clear();
        this.feedback.name = this.feedbackForm.controls.name.value;
        this.feedback.description = this.feedbackForm.controls.message.value;
        this.feedback.phone = this.feedbackForm.controls.phone.value;
        this.feedback.email = this.feedbackForm.controls.email.value;
        console.log(this.feedback);
        this._appService.api.sendFeedbackService(this.feedback)
            .subscribe(response => {
                this._appService.loading = false;

                if (response === 'Success') {
                    let container = $('#toast-container');
                    container.show();
                    this.toastrService.success(this.trans.feedbackSuccess);
                    this.feedbackForm.reset();
                }else{

                    this._appService.loading = false;
                    let container = $('#toast-container');
                    container.show();
                    let serv = this.toastrService.error(this.trans.feedbackError);

                }

            });

    }


    getContactData() {
        this._appService.api.getContactDataService().subscribe(response => {
            this.contact = response['payload'][0];
            this._appService.loading = false;

            setTimeout(() => {
                this._appService.loading = false;
            }, 1000);

        });
    }

    clear() {
        this.feedback.phone = '';
        this.feedback.email = '';
        this.feedback.description = '';
        this.feedback.name = '';

    }

    ngOnInit() {
        window.scrollTo(0, 0);
        this.getContactData();
    }


}
