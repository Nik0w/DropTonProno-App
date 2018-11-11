import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PronosticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pronostics',
  templateUrl: 'pronostics.html',
})
export class PronosticsPage {

	slides: Array<{title: string, content: string}>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

		this.slides = [
	  		{ title: 'Journée1', content: 'Bla bla 1' },
			{ title: 'Journée2', content: 'Bla bla 2' }
		];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PronosticsPage');
	}

}
