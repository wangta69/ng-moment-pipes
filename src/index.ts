import { NgModule } from '@angular/core';

import { MomentPipe } from "./pipes/moment.pipe";
import { MomentUnixPipe } from "./pipes/momentUnix.pipe";
import { MomentRelativePipe,  MomentRelativeOfPipe} from "./pipes/momentRelative.pipe";


@NgModule({
  declarations: [
    MomentPipe,
    MomentUnixPipe,
    MomentRelativePipe,
    MomentRelativeOfPipe
  ],
  exports: [
    MomentPipe,
    MomentUnixPipe,
    MomentRelativePipe,
    MomentRelativeOfPipe
  ]
})
export class MomentPipesModule {}


export * from './pipes/moment.pipe';
export * from './pipes/momentUnix.pipe';
export * from './pipes/momentRelative.pipe';
