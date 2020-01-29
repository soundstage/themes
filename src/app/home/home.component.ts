import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

import { Settings } from '../classes/settings';

var STORAGE_KEY = 'setting';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  storedSetting: Settings;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this.storedSetting = this.storage.get(STORAGE_KEY);
    console.log(this.storedSetting);
    if(this.storedSetting != undefined){
      let panel = document.getElementsByClassName('panel') as HTMLCollectionOf<HTMLElement>;
      let text = document.getElementsByClassName('text') as HTMLCollectionOf<HTMLElement>;
      document.body.style.backgroundColor = this.storedSetting.bgColor;
      panel[0].style.backgroundColor = this.storedSetting.panelColor;
      text[0].style.color = this.storedSetting.textColor;
    }
  }

}
