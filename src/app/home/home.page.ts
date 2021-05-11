import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser,) {}


  openBlank(){
this.iab.create('http://www.sdrs.com.sa','_blank','location=yes');
  }
  openSystem(){
    this.iab.create('http://www.sdrs.com.sa','_system','location=yes');
  }

}
