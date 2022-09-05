import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warzone-result',
  templateUrl: './warzone-result.component.html',
  styleUrls: ['./warzone-result.component.css']
})
export class WarzoneResultComponent implements OnInit {

  statics: Array<any>;
  stats;
  kd;
  KDRecent;
  isLoading = false;
  hasErrors = false;


  constructor(private router: Router) {
    const result = this.router.getCurrentNavigation();
    this.stats = result.extras.state;
    this.statics = this.stats.recentMatches.matches;
    this.kd = this.stats.response.br.kdRatio;
  }

  ngOnInit(): void {
    console.log(status)
  }

  returnKd(kd: number): number {
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
