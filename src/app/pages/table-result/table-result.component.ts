import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TableService } from 'src/app/_services/table.service';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.css']
})
export class TableResultComponent implements OnInit {

  idCamp: number;
  tables: TableService[] = []

  constructor(private pontuacao: TableService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idCamp = +params.get('idCamp')
      console.log(this.idCamp)
    })


    this.getPontuacao();
  }


  getPontuacao() {
    this.pontuacao.getTable().subscribe(res => {
      this.tables = res;
    }, err => {
      console.log(err);
    })
  }

}
