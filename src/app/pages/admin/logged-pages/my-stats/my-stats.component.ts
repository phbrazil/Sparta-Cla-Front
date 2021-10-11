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

  statics: Array<any>;
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

      this.isLoading = false;

      this.statics = res.recentMatches.matches;

      let json = JSON.stringify(res)

      if (JSON.parse(json).error) {

        this.hasErrors = true

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
      }


    }, err => {

      this.isLoading = false;

      this.hasErrors = true
    })

  }

  returnDaysPlay(days: number): number {
    let result = Math.round(days / 86.400);
    const day = result.toString();
    let dayNumber = day.substr(0, 2);
    result = parseInt(dayNumber);
    return   result;
  }

  returnKd(kd: number): number {
    return Math.round(kd * 100) / 100;
  }

  returnMode(mode: string) {
    switch (mode) {
      case "br_rebirth_rbrthquad":
        return "Rebirth";
      case "br_dbd_dbd":
        return "Prova de Ferro 84";
      case "br_brquads":
        return "BR Squad";
      case "br_brtrios":
        return "BR Trios";
      case "br_brduos":
        return "BR Duos";
      case "br_brsolo":
        return "BR Solo";
    }
  }
}
