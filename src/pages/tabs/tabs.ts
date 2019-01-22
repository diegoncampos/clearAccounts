import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { AddEventPage } from '../add-event/add-event';
import { LastEventsPage } from '../last-events/last-events';
import { MyGuestsPage } from '../my-guests/my-guests';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddEventPage;
  tab2Root = MyGuestsPage;
  tab3Root = LastEventsPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
