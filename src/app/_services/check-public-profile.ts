import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from '../utils/Constants';
import { ActivisionService } from './activision.service';
@Injectable({
  providedIn: 'root'
})
export class CheckPublicProfileService {

  private isPublic = new BehaviorSubject<boolean>(false);

  constructor(private activisionService: ActivisionService) { }

  public setPublicStatus(status: boolean): void{
    this.isPublic.next(status);
  }

  public getPublicStatus(): Observable<boolean>{
    return this.isPublic.asObservable();
  }

  checkPublicStatus(gamerTag: string, platform: string){

    this.activisionService.getWarzoneInfoCloudFunction(Constants.email, Constants.password, gamerTag, platform).subscribe(res =>{

      this.setPublicStatus(true);

    }, err =>{

      this.setPublicStatus(false);

    })

  }



}
