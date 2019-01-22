import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGuestsPage } from './my-guests';

@NgModule({
  declarations: [
    MyGuestsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGuestsPage),
  ],
})
export class MyGuestsPageModule {}
