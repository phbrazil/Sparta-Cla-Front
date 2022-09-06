import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs/operators';
import { ActivisionService } from 'src/app/_services/activision.service';

@Component({
  selector: 'app-warzone-search',
  templateUrl: './warzone-search.component.html',
  styleUrls: ['./warzone-search.component.css']
})
export class WarzoneSearchComponent implements OnInit {

  wzProfile: string;
  platform: string = "psn";
  isLoading: boolean = false;
  stats: any;

  constructor(private router: Router, private activisionService: ActivisionService) { }

  ngOnInit(): void {
  }

  consultaUsuario() {
    this.isLoading = true;
    this.activisionService.getWarzoneInfoCloudFunction(this.wzProfile, this.platform)
      .pipe(
        retry(3), // you retry 3 times
      ).subscribe(resp => {
        this.stats = resp.stats.body;
        this.stats = JSON.parse(this.stats);
        this.isLoading = false;
      });
  }

}
