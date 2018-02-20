import { NgModule } from '@angular/core';

import { MomentPipe } from "./pipes/moment.pipe";
import { MomentUnixPipe } from "./pipes/momentUnix.pipe";


@NgModule({
  declarations: [
    MomentPipe,
    MomentUnixPipe,
  ],
  exports: [
    MomentPipe,
    MomentUnixPipe
  ]
})
export class MomentPipesModule {}


export * from './pipes/moment.pipe';
export * from './pipes/momentUnix.pipe';
