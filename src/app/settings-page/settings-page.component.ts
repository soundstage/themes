import { Component, OnInit, Inject, Input } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

import { Settings } from '../classes/settings';

var STORAGE_KEY = 'setting';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  storedSetting: Settings;
  displayMessage: boolean = false;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    //If no settings in local storage, display default values
    this.storedSetting = this.storage.get(STORAGE_KEY);
    console.log(this.storedSetting);
    if (this.storedSetting == undefined) {
      this.storedSetting = new Settings();
      this.storedSetting.bgColor = "white";
      this.storedSetting.panelColor = "grey";
      this.storedSetting.textColor = "black";
    }
  }

  saveSettings() {
    if (this.storage.get(STORAGE_KEY)) {
      this.storage.remove(STORAGE_KEY);
      this.storage.set(STORAGE_KEY, this.storedSetting);
    } else {
      this.storage.set(STORAGE_KEY, this.storedSetting);
    }
    this.displayMessage = true;
  }

}
