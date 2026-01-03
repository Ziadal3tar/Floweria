import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexTooltip,
  ApexDataLabels,
  ChartComponent
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  imports: [ChartComponent]
})
export class AdminDashboard {
  stats = [
    { label: 'Orders', value: 120 },
    { label: 'Revenue', value: '$3,400' },
    { label: 'Users', value: 56 },
    { label: 'Products', value: 34 }
  ];
  @ViewChild('chart') chart!: ChartComponent;
  range: '7d' | '30d' | '90d' = '7d';
chartOptions: Partial<ChartOptions> | any;
  revenueSummary = {
    total: 48320,
    avgOrder: 38.4,
    bestDay: 'Friday'
  };
constructor() {
    this.chartOptions = this.getChartOptions(this.range);
  }


  getChartOptions(range: '7d' | '30d' | '90d'): Partial<ChartOptions> {
    const dataMap: any = {
      '7d': {
        categories: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        data: [5200, 6400, 5800, 7200, 9100, 8600, 7900]
      },
      '30d': {
        categories: Array.from({ length: 30 }, (_, i) => `Day ${i+1}`),
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 8000) + 2000)
      },
      '90d': {
        categories: Array.from({ length: 12 }, (_, i) => `Week ${i+1}`),
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 15000) + 5000)
      }
    };

    return {
      series: [
        {
          name: 'Revenue',
          data: dataMap[range].data
        }
      ],
      chart: {
        type: 'line',
        height: 260,
        toolbar: { show: false }
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: dataMap[range].categories
      },
      tooltip: {
        theme: 'light'
      }
    };
  }
  changeRange(range: '7d' | '30d' | '90d') {
    this.range = range;
this.chartOptions = this.getChartOptions(range);
    // mock change (later API)
    if (range === '30d') {
      this.revenueSummary.total = 142800;
      this.revenueSummary.avgOrder = 41.2;
      this.revenueSummary.bestDay = 'Saturday';
    }
  }
}
