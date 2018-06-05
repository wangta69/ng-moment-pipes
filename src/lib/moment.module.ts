import { NgModule } from '@angular/core';
import { MomentPipe } from './moment.pipe';
import { MomentUnixPipe } from './momentUnix.pipe';
import { MomentRelativePipe,  MomentRelativeOfPipe} from './momentRelative.pipe';

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
