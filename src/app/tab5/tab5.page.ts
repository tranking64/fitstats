import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  darkTheme = false;

  constructor() { }

  ngOnInit() {
    this.initDarkMode();
  }

  async initDarkMode() {
    const data = await Storage.get({ key: 'dark_mode' });

    console.log(JSON.parse(data.value));

    if(JSON.parse(data.value)) {
      this.darkTheme = true;
      document.body.setAttribute('color-theme', 'dark');
    }
    else {
      this.darkTheme = false;
      document.body.setAttribute('color-theme', 'light');
    }
  }

  async setDarkMode(mode: string) {
    await Storage.set({ key: 'dark_mode', value: mode });
  }

  callToggle() {
    if (this.darkTheme) {
      this.darkTheme = false;
      this.setDarkMode(JSON.stringify(this.darkTheme));
      document.body.setAttribute('color-theme', 'light');
    }
    else {
      this.darkTheme = true;
      this.setDarkMode(JSON.stringify(this.darkTheme));
      document.body.setAttribute('color-theme', 'dark');
    }
  }

}
