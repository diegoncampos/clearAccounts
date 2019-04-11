import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EventDetailPage } from '../event-detail/event-detail';
import { Storage } from '@ionic/storage';

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
  public myGuests:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private storage: Storage) {
    // this.storage.set("guestsList", JSON.stringify(this.myGuests));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  ionViewWillEnter() {  // each time you enter to tab call ionViewWillEnter()
    this.storage.get('guestsList').then((val) => {
      this.myGuests = val ? JSON.parse(val): [];
      console.log("LOADING: ionViewWillEnter", this.myGuests)
    });
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
            if (data.name !== '') {
              this.guests.push({name: data.name, debit: "", assets: "", contribution: data.contribution === ''? 0 : data.contribution});
              this.calculateTotalCost();
              this.costPeePerson();
              this.myGuests.push(data.name);
              this.storage.set("guestsList", JSON.stringify(this.myGuests));
            }
          }
        }
      ]
    });
    prompt.present();
  }

  selectGuest() {
    var loadedGuest: any = [];

    // this.storage.get('guestsList').then((val) => {
    //   this.myGuests = val ? JSON.parse(val) : [];
      this.myGuests.forEach((name) => {
        loadedGuest.push({
          name: name,
          type:'checkbox',
          checked:false,
          label: name,
          value:name
       })
      });
      let prompt = this.alertCtrl.create({
        title: 'Select Guests',
        inputs : loadedGuest,
        buttons: [
          {
            text: 'Cancel'
          },
          {
            text: 'Add',
            handler: data => {
              if (data) {
                data.forEach(name => {
                  this.guests.push({name: name, debit: "", assets: "", contribution: 0});
                  this.costPeePerson();
                });
              }
            }
          }
        ]
      });
      prompt.present();
    // });

  }

  deleteGuest(guest) {
    let index = this.guests.indexOf(guest);

    if (index > -1) {
      this.guests.splice(index, 1);
      console.log("Guest puso:", guest)
      this.event.totalCost -= guest.contribution;
    }
  }

  editGuest(guest) {

    let index = this.guests.indexOf(guest);

    let prompt = this.alertCtrl.create({
      title: 'Edit Guest: ',
      inputs: [
        {
        name: 'name',
        value: this.guests[index].name
      },
      {
        name: 'contribution',
        type: 'number',
        value: this.guests[index].contribution
      }
    ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {

            if (index > -1) {
              this.guests[index].name = data.name;
              this.guests[index].contribution = data.contribution;
              this.calculateTotalCost();
              this.costPeePerson();
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

  calculateTotalCost() {
    this.event.totalCost = 0;
    this.guests.forEach(guest => {
      console.log(guest)
      this.event.totalCost = +this.event.totalCost + +guest.contribution;
    });
  }

  openEventDetail() {
    this.navCtrl.push(EventDetailPage, {guest: this.guests, event: this.event, costPerPerson: this.costPerPerson});
  }

}
