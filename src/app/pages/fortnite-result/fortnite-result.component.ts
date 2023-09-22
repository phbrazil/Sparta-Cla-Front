import { Component, Input, OnInit } from '@angular/core';
import { platforms, ModernWarfare, login } from "call-of-duty-api";

@Component({
  selector: 'app-fortnite-result',
  templateUrl: './fortnite-result.component.html',
  styleUrls: ['./fortnite-result.component.css']
})
export class FortniteResultComponent implements OnInit {

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

  }

  ngOnChanges(): void{
    
  }

}
