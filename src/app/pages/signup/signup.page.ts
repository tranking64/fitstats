import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formattedDate = '';

  username: string;
  email: string;
  password = '';
  cPassword = '';
  gender: string;
  country: string;
  birthDate = format(new Date(), 'yyyy-MM-dd');

  constructor() { }

  ngOnInit() {
  }

  dateChanged(value) {
    this.birthDate = value;
    this.formattedDate = format(parseISO(value), 'dd MMM yyyy');
  }

}
