import { Component, OnInit } from '@angular/core';
import { ActivisionService } from 'src/app/_services/activision.service';

@Component({
  selector: 'app-warzone-search',
  templateUrl: './warzone-search.component.html',
  styleUrls: ['./warzone-search.component.css']
})
export class WarzoneSearchComponent implements OnInit {

  profile: string;
  platform: string = "psn";
  isLoading: boolean = false;
  result: any;

  constructor(private warzone: ActivisionService) { }

  ngOnInit(): void {
  }

  consultaUsuario() {
    this.isLoading = true;
    this.warzone.getWarzoneInfoCloudFunction(this.profile, this.platform).subscribe(resp => {
      console.log(resp);
      this.result = resp.stats.body;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      console.log(err)
    })
  }

}
