import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/_services';
import { ModalControlService } from 'src/app/_services/modal-control.service';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  formNewPassword: FormGroup;

  isChangingPassword = false;

  constructor(private fb: FormBuilder, private accountService: AccountService,
    private modalControl: ModalControlService) { }

  ngOnInit(): void {

    this.modalControl.closeAllModals();

    this.formNewPassword = this.fb.group({
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

  }

  enviar() {

    this.isChangingPassword = true;

  }

}
