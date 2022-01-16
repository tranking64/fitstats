import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/rankingUser';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  showFriendsOnly = false;

  users: User[] = [
    { rank: 1, username: 'very_gut', score: 1300 },
    { rank: 2, username: 'Imprint6', score: 1090 },
    { rank: 3, username: 'mauexe', score: 900 },
    { rank: 4, username: 'sleipn1r', score: 860 },
    { rank: 5, username: 'dmnktrn', score: 500 },
    { rank: 6, username: 'no2001ah', score: 450 },
    { rank: 7, username: 'aleggs', score: 310 }

  ];

  friends: User[] = [
    { rank: 1, username: 'very_gut', score: 1300 },
    { rank: 2, username: 'no2001ah', score: 450 }
  ] ;

  constructor() { }

  ngOnInit() {
  }

}
