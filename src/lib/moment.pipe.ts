import {Pipe, PipeTransform} from '@angular/core';
// import * as moment from 'moment';
import moment from 'moment';

@Pipe({name: 'moment'})
export class MomentPipe implements PipeTransform {
    transform(value: Date | moment.Moment, ...args: any[]): any {
        const [format] = args;
        return moment(value).format(format);
    }
}
