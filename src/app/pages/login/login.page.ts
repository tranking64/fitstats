import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.email = '';
    this.password = '';
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Ungültige Daten',
      message: 'Bitte überprüfe deine Eingaben.',
      buttons: ['OK']
    });

    await alert.present();
  }

  login() {
    if (this.email === 'd.tran@htlkrems.at' && this.password === 'dominik2003') {
      this.router.navigate(['/tabs/tab3']);
    }
    else {
      this.presentAlert();
    }
  }

}
