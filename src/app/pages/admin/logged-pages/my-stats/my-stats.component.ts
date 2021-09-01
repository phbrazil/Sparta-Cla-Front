import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services';
import { ActivisionService } from 'src/app/_services/activision.service';

@Component({
  selector: 'app-my-stats',
  templateUrl: './my-stats.component.html',
  styleUrls: ['./my-stats.component.css']
})
export class MyStatsComponent implements OnInit {

  user: User

  stats;

  KD;

  isLoading = false;

  hasErrors = false;

  constructor(private activisionService: ActivisionService,
    private accountService: AccountService) {

    this.accountService.user.subscribe(x => this.user = x);

    this.user.wzProfile = 'paulo_9ember'

  }

  ngOnInit(): void {


    this.getStats(this.user.wzProfile, 'psn')
  }

  getStats(wzProfile: string, platform: string) {

    this.isLoading = true;

    const email = 'paulo.henriqueb@me.com';
    const password = 'mortadela1';

    //this.activisionService.getWarzoneInfoRapidAPI(wzProfile, platform, this.user.token).subscribe(res => {
    this.activisionService.getWarzoneInfoCloudFunction(email, password, this.user.wzProfile, platform ).subscribe(res => {

      console.log(res)

      let json = JSON.stringify(res)

      if (JSON.parse(json).error) {

        this.hasErrors = true
        this.isLoading = false;

      } else {

        //SE API FOR CLOUD FUNCTION
        this.stats = res.response;

        //this.stats = res;

        this.KD = Math.round(this.stats.br.kdRatio * 100) / 100;

        this.isLoading = false;

      }


    }, err => {

      this.isLoading = false;

      this.hasErrors = true
    })

  }

}
