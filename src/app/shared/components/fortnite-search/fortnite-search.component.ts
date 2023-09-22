import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs/operators';
import { AlertService } from 'src/app/_services';
import { EpicService } from 'src/app/_services/epic.service';

@Component({
  selector: 'app-fortnite-search',
  templateUrl: './fortnite-search.component.html',
  styleUrls: ['./fortnite-search.component.css']
})
export class FortniteSearchComponent implements OnInit {

  wzProfile: string = "paulo_9ember";
  platform: string = "psn";
  isLoading: boolean = false;
  stats: any;

  constructor(private router: Router, private epicService: EpicService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  searchProfile() {
    this.isLoading = true;
    this.epicService.getStats(encodeURIComponent(this.wzProfile), this.platform)
      .pipe(
        retry(3), // you retry 3 times
      ).subscribe(res => {
          this.stats = res.stats;
          this.stats = JSON.parse(this.stats);
        this.isLoading = false;
      }, _err => {
        this.alertService.error('Tente novamente', 'Nome de usúario ou plataforma  incorreto', { keepAfterRouteChange: true });
        //this.wzProfile = '';
        this.isLoading = false
      });
  }

}
