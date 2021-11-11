import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services';
import { ModalControlService } from 'src/app/_services/modal-control.service';
import * as $ from 'jquery';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title: string;

  isModalLogin = false;
  isModalRegister = false;
  isModalReset = false;

  user: User;

  constructor(private accountService: AccountService, private modalControl: ModalControlService, private cdr: ChangeDetectorRef) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

    this.modalControl.getModalLogin().subscribe(status => {
      this.isModalLogin = status;
    })

    this.modalControl.getModalRegister().subscribe(status => {
      this.isModalRegister = status;
    })

    this.modalControl.getModalReset().subscribe(status => {
      this.isModalReset = status;
    })

    this.cdr.detectChanges();

  }

  setModalLoginAsOpen() {

    //REMOVE FADE BUGADO QUE CONTINUAVA
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();

    this.modalControl.setModalLogin(true);
    this.modalControl.setModalRegister(false);
    this.modalControl.setModalReset(false);

  }


}
