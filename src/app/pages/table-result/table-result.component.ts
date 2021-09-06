import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/_services/table.service';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.css']
})
export class TableResultComponent implements OnInit {

  tables: TableService[] = []

  constructor(private pontuacao: TableService) { }

  ngOnInit(): void {
    this.getPontuacao();
  }


  getPontuacao() {
    this.pontuacao.getTable().subscribe(res => {
      this.tables = res;
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

}
