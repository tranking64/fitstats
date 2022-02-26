import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  lineChart: any;

  xLabel = [];
  yData = [];

  constructor(
    private router: Router
  ) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.lineChartMethod();
  }

  add() {
    this.xLabel.push('12. Jan');
    this.yData.push(Math.floor(Math.random() * (70 - 35 + 1) + 35));

    this.lineChart.destroy();
    this.lineChartMethod();
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        // eslint-disable-next-line max-len
        labels: this.xLabel, //['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Übungsgewicht in kg',
            fill: false,
            backgroundColor: 'rgba(55,117,42,1)', // 'rgba(2,204,254,0.4)',
            borderColor: 'rgba(55,117,42,1)', // 'rgba(2,204,254,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(55,117,42,1)', // 'rgba(2,204,254,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(55,117,42,1)', // 'rgba(2,204,254,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.yData, //[47.5, 35, 52.5, 50, 47.5, 45, 40, 40, 50, 50, 45, 40],
            spanGaps: false,
          }
        ]
      }
    });
  }

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
