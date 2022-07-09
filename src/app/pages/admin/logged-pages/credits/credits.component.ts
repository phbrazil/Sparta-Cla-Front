import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      backgroundColor:["#e4a101", "#e4a101", "#e4a101", "#e4a101", "#e4a101", "#e4a101", "#e4a101", "#e4a101"]
    }];

  public vitorias: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 50], label: 'Vitórias' },
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Derrotas' }
  ];

  public creditos: ChartDataSets[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Vitórias' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Créditos' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegate() {
    this.router.navigate(['/buy-credits']);
  }

}
