import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LastEventsPage } from './last-events';

@NgModule({
  declarations: [
    LastEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(LastEventsPage),
  ],
})
export class LastEventsPageModule {}
