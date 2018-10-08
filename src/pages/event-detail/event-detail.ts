import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  public guests:any = [];
  public event:any;
  public costPerPerson:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.guests = navParams.get('guest');
    this.event = navParams.get('event');
    this.costPerPerson = navParams.get('costPerPerson');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

  getOwe(contribution) {
    return this.costPerPerson - contribution;
  }

  shareList() {
    
  }

}
