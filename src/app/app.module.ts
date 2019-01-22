import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { AddEventPage } from '../pages/add-event/add-event';
import { LastEventsPage } from '../pages/last-events/last-events';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { MyGuestsPage } from '../pages/my-guests/my-guests';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    TabsPage,
    AddEventPage,
    LastEventsPage,
    EventDetailPage,
    MyGuestsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    TabsPage,
    AddEventPage,
    LastEventsPage,
    EventDetailPage,
    MyGuestsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocialSharing
  ]
})
export class AppModule {}
