import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'jio-interview';

  panelOpenState = false;
  activities = [
    {
      title: 'New Order',
      value: 29,
      status: '15% from this yesterday',
    },
    {
      title: 'To Be Shipped',
      value: 35,
      status: '15% from this yesterday',
    },
    {
      title: 'To Be Invoiced',
      value: 17,
      status: '15% from this yesterday',
    },
    {
      title: 'To Be Delivered',
      value: 24,
      status: '15% from this yesterday',
    },
  ];

  navs = [
    {
      name: 'Dashboard',
      icon: 'share',
      path: '/dashboard',
    },
    {
      name: 'Task & Assignment',
      icon: 'share',
      path: '/task',
    },
    {
      name: 'Stocks',
      icon: 'share',
      path: '/stocks',
    },
    {
      name: 'Sales',
      icon: 'share',
      path: '/sales',
    },
    {
      name: 'Purchase',
      icon: 'share',
      path: '/purchase',
    },
    {
      name: 'Production Plan',
      icon: 'share',
      path: '/prod',
    },
    {
      name: 'Reports',
      icon: 'share',
      path: '/reports',
    },
  ];

  variants = [
    { firstName: 'Arbutus', lastName: 'Marina', value: 25 },
    { firstName: 'Sempervirens', lastName: 'Buxus', value: 25 },
    { firstName: 'Camellia', lastName: 'Jab Purity', value: 25 },
    { firstName: 'Betula', lastName: 'Utilis', value: 25 },
  ];

  products = [
    {
      img: '../assets/Asset 2.png',
      name: 'Asset 2',
    },
    {
      img: '../assets/Asset 3.png',
      name: 'Asset 3',
    },
    {
      img: '../assets/Asset 4.png',
      name: 'Asset 4',
    },
    {
      img: '../assets/Asset 5.png',
      name: 'Asset 5',
    },
  ];

  pieChart = new Chart({
    chart: {
      plotShadow: false,
      height: 200,
      width: 500,
      marginRight: 100,
      type: 'pie',
    },
    title: {
      text: ' ',
    },
    credits: {
      enabled: false,
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      layout: 'vertical',
      x: 0,
      y: 50,
      labelFormatter: function () {
        return this.name + ' ' + (this as any).y + '%';
      },
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: ['#f7931e', '#29abe2', '#8cc63f'],
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: 'Stock Details',
        colorByPoint: true,
        data: [
          {
            name: 'Low Stock Variants',
            y: 30,
            selected: true,
          },
          {
            name: 'Surplus',
            y: 27,
          },
          {
            name: 'All Variants',
            y: 43,
          },
        ],
      },
    ] as any,
  });
}
