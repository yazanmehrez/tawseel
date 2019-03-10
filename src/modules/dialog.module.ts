import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
} from '@angular/material';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [
        TranslateModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        BrowserAnimationsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule {
}
