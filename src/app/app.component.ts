import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {
    this.initDarkMode();
  }

  async initDarkMode() {
    const data = await Storage.get({ key: 'dark_mode' });

    if(JSON.parse(data.value)) {
      document.body.setAttribute('color-theme', 'dark');
    }
    else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
}
