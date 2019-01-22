import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MyGuestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-guests',
  templateUrl: 'my-guests.html',
})
export class MyGuestsPage {

  public guestsList:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
    // this.storage.get('guestsList').then((val) => {
    //   this.guestsList = val ? JSON.parse(val): [];
    //   console.log("CARGO", this.guestsList)
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyGuestsPage');
  }

  ionViewWillEnter() {  // each time you enter to tab call ionViewWillEnter()
    this.storage.get('guestsList').then((val) => {
      this.guestsList = val ? JSON.parse(val): [];
      console.log("LOADING: ionViewWillEnter", this.guestsList)
    });
  }

  // Fixed on ionViewWillEnter()
  // refresh() {
  //   this.storage.get('guestsList').then((val) => {
  //     this.guestsList = JSON.parse(val);
  //   });
  // }

  deleteGuest(name) {
    var index = this.guestsList.indexOf(name);
    if (index > -1) {
      this.guestsList.splice(index, 1);
    }
    this.storage.set("guestsList", JSON.stringify(this.guestsList));
  }

  addGuest() {
    let prompt = this.alertCtrl.create({
      title: 'Add Guest',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            console.log("ACAAA", this.guestsList)
            this.guestsList.push(data.name);
            this.storage.set("guestsList", JSON.stringify(this.guestsList));
          }
        }
      ]
    });
    prompt.present();
  }

}
