import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

/**
* Format Dates
* moment("20111031", "YYYYMMDD").fromNow();  // 12 minutes ago
*/
@Pipe({name: 'momentRelative'})
export class MomentRelativePipe implements PipeTransform {
    transform(value: Date|moment.Moment, ...args: any[]): any {
        let [format] = args;
        //return moment(value).format(format);
        return moment(value, format).fromNow();
    }
}

/**
* Format Dates
* moment().startOf('hour').fromNow();       // 12 minutes ago
* @param String of : startOf, endOf
* @param String val : day, hour
*/
@Pipe({name: 'momentRelativeOf'})
export class MomentRelativeOfPipe implements PipeTransform {
    transform(of:string, val: any): any {
        //return moment(value).format(format);
        switch(of){
            case 'startOf': return moment().startOf(val).fromNow();
            case 'endOf': return moment().startOf(val).fromNow();
        }
        return null;
    }
}