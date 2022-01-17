import { Component } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  friends: User[] = [
    { username: 'no2001ah', gender: 'Mann', age: 18, country: 'Österreich' },
    { username: 'very_gut', gender: 'Mann', age: 18, country: 'Österreich' },
    { username: 'Faithor', gender: 'Frau', age: 34, country: 'Deutschland' },
    { username: 'Declist', gender: 'Mann', age: 20, country: 'Schweiz' },
  ] ;

  constructor() {}

}
