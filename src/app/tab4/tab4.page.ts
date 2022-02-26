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
    { username: 'very_gut', score: 2300 },
    { username: 'Imprint6', score: 2090 },
    { username: 'mauexe', score: 1900 },
    { username: 'sleipn1r', score: 1860 },
    { username: 'dmnktrn', score: 1500 },
    { username: 'no2001ah', score: 1450 },
    { username: 'aleggs', score: 1310 },
    { username: 'AnnUber', score: 900 },
    { username: 'Faithor', score: 860 },
    { username: 'Declist', score: 500 },
    { username: 'Laneo', score: 450 },
    { username: 'Runninger', score: 310 },

    /*{ rank: 8, username: 'very_gut', score: 1300 },
    { rank: 9, username: 'Imprint6', score: 1090 },
    { rank: 10, username: 'mauexe', score: 900 },
    { rank: 11, username: 'sleipn1r', score: 860 },
    { rank: 12, username: 'dmnktrn', score: 500 },
    { rank: 13, username: 'no2001ah', score: 450 },
    { rank: 14, username: 'aleggs', score: 310 },
    { rank: 15, username: 'very_gut', score: 1300 },
    { rank: 16, username: 'Imprint6', score: 1090 },
    { rank: 17, username: 'mauexe', score: 900 },
    { rank: 18, username: 'sleipn1r', score: 860 },
    { rank: 19, username: 'dmnktrn', score: 500 },
    { rank: 20, username: 'no2001ah', score: 450 },
    { rank: 21, username: 'aleggs', score: 310 },
    { rank: 22, username: 'very_gut', score: 1300 },
    { rank: 23, username: 'Imprint6', score: 1090 },
    { rank: 24, username: 'mauexe', score: 900 },
    { rank: 25, username: 'sleipn1r', score: 860 },
    { rank: 26, username: 'dmnktrn', score: 500 },
    { rank: 27, username: 'no2001ah', score: 450 },
    { rank: 28, username: 'aleggs', score: 310 },
    { rank: 29, username: 'very_gut', score: 1300 },
    { rank: 30, username: 'Imprint6', score: 1090 },
    { rank: 31, username: 'mauexe', score: 900 },
    { rank: 32, username: 'sleipn1r', score: 860 },
    { rank: 33, username: 'dmnktrn', score: 500 },
    { rank: 34, username: 'no2001ah', score: 450 },
    { rank: 35, username: 'aleggs', score: 310 },
    { rank: 36, username: 'very_gut', score: 1300 },
    { rank: 37, username: 'Imprint6', score: 1090 },
    { rank: 38, username: 'mauexe', score: 900 },
    { rank: 39, username: 'sleipn1r', score: 860 },
    { rank: 40, username: 'dmnktrn', score: 500 },
    { rank: 41, username: 'no2001ah', score: 450 },
    { rank: 42, username: 'aleggs', score: 310 },
    { rank: 43, username: 'very_gut', score: 1300 },
    { rank: 44, username: 'Imprint6', score: 1090 },
    { rank: 45, username: 'mauexe', score: 900 },
    { rank: 46, username: 'sleipn1r', score: 860 },
    { rank: 47, username: 'dmnktrn', score: 500 },
    { rank: 48, username: 'no2001ah', score: 450 },
    { rank: 49, username: 'aleggs', score: 310 },
    { rank: 50, username: 'very_gut', score: 1300 }*/
  ];

  friends: User[] = [
    { username: 'very_gut', score: 1300 },
    { username: 'no2001ah', score: 1450 },
    { username: 'Faithor', score: 860 },
    { username: 'Declist', score: 500 }
  ] ;

  constructor() { }

  ngOnInit() {
  }

}
