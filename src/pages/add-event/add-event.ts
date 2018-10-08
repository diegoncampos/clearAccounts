import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EventDetailPage } from '../event-detail/event-detail';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  public event:any = {name:"", description: "", date:"", startTime: "", totalCost: ""};
  public guests:any = [];
  public costPerPerson:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  addGuest() {
    let prompt = this.alertCtrl.create({
      title: 'Add Guest',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'contribution',
          type: 'number',
          placeholder: 'Contribution'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            console.log("Add:", data)
            this.guests.push({name: data.name, debit: "", assets: "", contribution: data.contribution});
            this.costPeePerson();
          }
        }
      ]
    });
    prompt.present();
  }

  deleteGuest(guest) {
    let index = this.guests.indexOf(guest);

    if (index > -1) {
      this.guests.splice(index, 1);
    }
  }

  editGuest(guest) {

    let index = this.guests.indexOf(guest);

    let prompt = this.alertCtrl.create({
      title: 'Edit Guest: ',
      inputs: [{
        name: 'name',
        value: this.guests[index]
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {

            if (index > -1) {
              this.guests[index] = data.name;
            }
          }
        }
      ]
    });

    prompt.present();

  }

  costPeePerson() {
    this.costPerPerson = this.guests.length ? +this.event.totalCost / this.guests.length : +this.event.totalCost;
  }

  openEventDetail() {
    this.navCtrl.push(EventDetailPage, {guest: this.guests, event: this.event, costPerPerson: this.costPerPerson});
  }

}
