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
  lastMatchDetail;
  KDRecent;
  isLoading = false;
  hasErrors = false;
  lastMatchKDInfo;



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

    this.activisionService.getWarzoneInfoCloudFunction(wzProfile, platform).subscribe(res => {

      let json = JSON.parse(res.stats.body);

      console.log(json)

      this.isLoading = false;

      this.statics = json.recentMatches.matches;

      if (json.error) {

        this.hasErrors = true

      } else {

        var SSOToken = json.SSOToken.replaceAll('=', ':').replaceAll(';', ':');

        SSOToken = SSOToken.split(":");

        console.log(SSOToken[7].trim())

        //SE API FOR CLOUD FUNCTION
        this.stats = json.response;
        this.recentMatches = json.recentMatches;
        this.lastMatchDetail = json.lastMatchDetail;

        //this.stats = res;

        this.KD = Math.round(this.stats.br.kdRatio * 100) / 100;
        this.KDRecent = Math.round(this.recentMatches.summary.all.kdRatio * 100) / 100;

        //AVERAGE KD LAST MATCH

        this.lastMatchKDInfo = this.getLastMatchKD();

      }


    }, err => {
      console.log(err, "erro aqui");
      this.isLoading = false;

      this.hasErrors = true
    })

  }

  getLastMatchKD() {

    let higherKD = {
      name: '',
      kdRatio: 0
    };

    let response = {
      higherKD: higherKD,
      averageKD: 0
    }

    let averageKD = 0;

    let qtdPlayers = 0;

    this.lastMatchDetail.allPlayers.forEach(player => {

      console.log(player)

      averageKD = averageKD + player.playerStats.kdRatio;

      if (player.playerStats.kdRatio > 0) {
        qtdPlayers++;
      }

      if(player.playerStats.kdRatio > higherKD.kdRatio){
        higherKD.kdRatio = player.playerStats.kdRatio;
        higherKD.name = player.player.username;
      }

    });

    response.higherKD = higherKD;
    response.averageKD = Math.round(averageKD / qtdPlayers);

    return response;
  }

  returnDaysPlay(days: number): number {
    let result = Math.round(days / 86.400);
    const day = result.toString();
    let dayNumber = day.substr(0, 2);
    result = parseInt(dayNumber);
    return result;
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
