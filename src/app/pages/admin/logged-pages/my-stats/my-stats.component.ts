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

  recentMatches;

  KDRecent;

  isLoading = false;

  hasErrors = false;

  constructor(private activisionService: ActivisionService,
    private accountService: AccountService) {

    this.accountService.user.subscribe(x => this.user = x);

    this.user.wzProfile = 'paulo_9ember';
    this.user.platform = 'psn'

  }

  ngOnInit(): void {


    this.getStats(this.user.wzProfile, this.user.platform)
  }

  getStats(wzProfile: string, platform: string) {

    this.isLoading = true;

    const email = 'paulo.henriqueb@me.com';
    const password = 'mortadela1';

    //this.activisionService.getWarzoneInfoRapidAPI(wzProfile, platform, this.user.token).subscribe(res => {
    this.activisionService.getWarzoneInfoCloudFunction(email, password, wzProfile, platform).subscribe(res => {

      let json = JSON.stringify(res)

      if (JSON.parse(json).error) {

        this.hasErrors = true
        this.isLoading = false;

      } else {  

        var SSOToken = res.SSOToken.replaceAll('=', ':').replaceAll(';', ':');

        SSOToken = SSOToken.split(":"); 

        console.log(SSOToken[7].trim())

        //SE API FOR CLOUD FUNCTION
        this.stats = res.response;
        this.recentMatches = res.recentMatches;

        //this.stats = res;

        this.KD = Math.round(this.stats.br.kdRatio * 100) / 100;
        this.KDRecent = Math.round(this.recentMatches.summary.all.kdRatio * 100) / 100;

        this.isLoading = false;

      }


    }, err => {

      this.isLoading = false;

      this.hasErrors = true
    })

  }

}
