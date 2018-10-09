import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import * as moment from 'moment';
import * as html2canvas from "html2canvas"

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
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
    let eventDate = moment(new Date(this.event.date)).format("DD/MM/YYYY");
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      let message = "CLEAR ACCOUNTS!! Event: " + this.event.name + " - Total Cost: " + this.event.totalCost + " - " + eventDate;
      this.socialSharing.shareViaWhatsApp(message, canvas.toDataURL(), null)
      .then(() => {
          console.log("shareViaWhatsApp: Success");
        }).catch(() => {
          console.error("shareViaWhatsApp: failed");
        });
    });
  }


}
