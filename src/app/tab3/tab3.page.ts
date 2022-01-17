import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';
import {  } from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  // Data
  /*chartData: ChartDataset[] = [{ data: [], label: 'Stock price'}];

  chartLabels: Label[];*/

  constructor() {}

  getGreeting() {
    const currentDate = new Date();

    let greeting = '';
    if (currentDate.getHours() <= 5) {
      greeting = 'Gute Nacht';
    }
    else if(currentDate.getHours() <= 10) {
      greeting = 'Guten Morgen';
    }
    else if (currentDate.getHours() <= 14) {
      greeting = 'Hallo';
    }
    else if (currentDate.getHours() <= 18) {
      greeting = 'Guten Tag';
    }
    else if(currentDate.getHours() <= 22) {
      greeting = 'Guten Abend';
    }
    else {
      greeting = 'Gute Nacht';
    }

    return greeting;
  }

}
