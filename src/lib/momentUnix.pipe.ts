import {Pipe, PipeTransform} from '@angular/core';
import moment from 'moment';
// import * as moment from 'moment';

@Pipe({name: 'momentUnix'})
export class MomentUnixPipe implements PipeTransform {
    transform(value:number, ...args: any[]): any {
        let [format] = args;
        return moment.unix(value).format(format);
    }
}
