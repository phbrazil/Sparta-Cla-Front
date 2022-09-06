import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { retry } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services';
import { ActivisionService } from 'src/app/_services/activision.service';
import { delay, map } from 'underscore';

@Component({
  selector: 'app-my-stats',
  templateUrl: './my-stats.component.html',
  styleUrls: ['./my-stats.component.css']
})
export class MyStatsComponent implements OnInit {

  public user: User;
  public stats: any;
  public isLoading: boolean = false;
  public hasErrors: boolean = false;

  constructor(private activisionService: ActivisionService,
    private accountService: AccountService) {

    this.accountService.user.subscribe(x => this.user = x);

  }

  ngOnInit(): void {

    this.getStats(this.user.wzProfile, this.user.platform)
  }

  getStats(wzProfile: string, platform: string) {

    this.isLoading = true;

    this.hasErrors = false;

    this.activisionService.getWarzoneInfoCloudFunction(wzProfile, platform)
      .pipe(
        retry(3), // you retry 3 times
      ).subscribe(resp => {
        this.stats = resp.stats.body;
        this.stats = JSON.parse(this.stats);
        this.isLoading = false;
      });
  }

}
