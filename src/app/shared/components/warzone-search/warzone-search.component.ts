import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private warzone: ActivisionService) { }

  ngOnInit(): void {
  }

  consultaUsuario() {
    this.isLoading = true;
    this.warzone.getWarzoneInfoCloudFunction(this.profile, this.platform).subscribe(resp => {
      this.result = resp.stats.body;
      this.result = JSON.parse(this.result);
      this.isLoading = false;

      this.router.navigateByUrl('/warzoneResult', {state: this.result})
    }, err => {
      this.isLoading = false;
      console.log(err)
    })
  }

}
