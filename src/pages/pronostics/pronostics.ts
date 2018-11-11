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

	matchs: Array<{title: string, content: any}>;
	journees: Array<{nom: string}>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

		this.journees = [
			{nom: 'Journée1'},
			{nom: 'Journée2'}

		]

		this.matchs = [
			{
				title: 'Match01',
		  		content: {
		  			'date':'10-10-2018',
		  			'equipe1':'Union Bordeaux Bègles',
		  			'equipe2':'Stade Toulousain'
		  		}
	  		},
	  		{
				title: 'Match02',
		  		content: {
		  			'date':'10-10-2018',
		  			'equipe1':'Union Bordeaux Bègles',
		  			'equipe2':'Stade Toulousain'
		  		}
	  		},
	  		{
				title: 'Match03',
		  		content: {
		  			'date':'10-10-2018',
		  			'equipe1':'Union Bordeaux Bègles',
		  			'equipe2':'Stade Toulousain'
		  		}
	  		},
	  		{
				title: 'Match01',
		  		content: {
		  			'date':'10-10-2018',
		  			'equipe1':'Union Bordeaux Bègles',
		  			'equipe2':'Stade Toulousain'
		  		}
	  		},
	  		{
				title: 'Match02',
		  		content: {
		  			'date':'10-10-2018',
		  			'equipe1':'Union Bordeaux Bègles',
		  			'equipe2':'Stade Toulousain'
		  		}
	  		},
	  		{
				title: 'Match03',
		  		content: {
		  			'date':'10-10-2018',
		  			'equipe1':'Union Bordeaux Bègles',
		  			'equipe2':'Stade Toulousain'
		  		}
	  		}
		];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PronosticsPage');
	}

}
