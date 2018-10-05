import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { AddEventPage } from '../add-event/add-event';
import { LastEventsPage } from '../last-events/last-events';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddEventPage;
  tab2Root = LastEventsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
