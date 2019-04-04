import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'nbsp'
})

export class NoBreakSpace implements PipeTransform {
    constructor() {
    }

    public transform(value: any) {
        return value.replace(/ /g, '\u00a0');
    }
}
