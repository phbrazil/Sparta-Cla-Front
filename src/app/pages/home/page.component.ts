import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivisionService } from 'src/app/_services/activision.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private fb: FormBuilder, private warzone: ActivisionService) { }


  ngOnInit(): void {
  }

  consultaUsuario() {

    this.warzone.getWarzoneInfoCloudFunction('OneAboveALLjr', 'psn').subscribe(resp => {
      console.log(resp);
    }, err => {
      console.log(err)
    })
  }

}
