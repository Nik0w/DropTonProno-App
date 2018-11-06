import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public items = [];
	public results;

constructor(public http: Http, public navCtrl: NavController) {


	this.http.get('https://jsonplaceholder.typicode.com/todos')
		.map(response => response.json())
	 	.subscribe(
	 		result => this.results = result
		);
			
}

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
