import { Component, Input, OnInit } from '@angular/core';
import { platforms, ModernWarfare, login } from "call-of-duty-api";

@Component({
  selector: 'app-warzone-result',
  templateUrl: './warzone-result.component.html',
  styleUrls: ['./warzone-result.component.css']
})
export class WarzoneResultComponent implements OnInit {

  @Input() stats: any;

  public statics: Array<any>;
  public kd: number;
  public KDRecent: number;
  public isLoading: boolean = false;
  public hasErrors: boolean = false;
  public lastMatchKDInfo: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.stats);
    this.statics = this.stats.recentMatches.data.matches;
    this.kd = this.stats.response.data.weekly.all.properties.kdRatio;
    this.lastMatchKDInfo = this.getLastMatchKD();

  }

  getLastMatchKD() {

    let response = {
      higherKD: {
        name: '',
        kdRatio: 0
      },
      averageKD: 0
    }

    let averageKD = 0;

    let qtdPlayers = 0;

    this.stats.lastMatchInfo.data.allPlayers.forEach(player => {

      console.log(player);

      averageKD = averageKD + player.playerStats.kdRatio;

      if (player.playerStats.kdRatio > 0) {
        qtdPlayers++;
      }

      if (player.playerStats.kdRatio > response.higherKD.kdRatio) {
        response.higherKD.kdRatio = Math.round(player.playerStats.kdRatio * 100) / 100;
        response.higherKD.name = player.player.username;
      }

    });

    response.averageKD = Math.round(averageKD / qtdPlayers);

    return response;

  }

  public returnKd(kd: number): number {
    return Math.round(kd * 100) / 100;
  }

  returnMode(mode: string) {
    switch (mode) {
      case "br_rebirth_rbrthquad":
        return "Rebirth Squad";
      case "br_rebirth_rbrthtrios":
        return "Rebirth Trio";
      case "br_rebirth_rbrthduos":
        return "Rebirth Duo";
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

      //NOVO MAPA CALDERA
      case "br_vg_royale_solo":
        return "BR Solo (Vanguard)";
      case "br_vg_royale_duos":
        return "BR Duo (Vanguard)";
      case "br_vg_royale_trios":
        return "BR Trio (Vanguard)";
      case "br_vg_royale_quads":
        return "BR Squad (Vanguard)";
      case "br_br_quads":
        return "BR Squad";
      case "br_dmz_plndsolo":
        return "Saque Solo"
      case "br_dmz_plndduos":
        return "Saque Duo"
      case "br_dmz_plndtrios":
        return "Saque Trio"
      case "br_dmz_plndquads":
        return "Saque Squad"

      //NOVO MAPA FORTUNE'S KEEP
      case "br_rebirth_playlist_wz340/fortkeep_res_quad":
        return "Fortune's Keep Squad";
      case "br_rebirth_playlist_wz340/fortkeep_res_trios":
        return "Fortune's Keep Trio";
      case "br_rebirth_playlist_wz340/fortkeep_res_duos":
        return "Fortune's Keep Duo";
      case "br_rebirth_playlist_wz340/fortkeep_res_solo":
        return "Fortune's Keep Solo";
    }
  }

}
