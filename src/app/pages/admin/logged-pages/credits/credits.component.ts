import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public chartColors: any[] = [
    { 
      backgroundColor:["#e4a101", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"] 
    }];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Vitórias' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Derrotas' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
