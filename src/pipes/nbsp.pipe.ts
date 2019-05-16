import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'nbsp'
})

export class NoBreakSpace implements PipeTransform {
    word;

    constructor() {
    }

    public transform(value: any) {
        this.word = value.replace(/ /g, '\u00a0');
        this.word = this.word.replace(/-/g, '\u2011');
        return this.word;
    }
}
