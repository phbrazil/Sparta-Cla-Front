import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmTournamentComponent } from 'src/app/pages/admin/logged-pages/confirm-tournament/confirm-tournament.component';

@Component({
  selector: 'app-modal-public',
  templateUrl: './modal-public.component.html',
  styleUrls: ['./modal-public.component.css']
})
export class ModalPublicComponent implements OnInit {

  isLoading: boolean = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {


    this.openModal();

  }

  openModal() {

    this.isLoading = true;

    this.dialog.open(ConfirmTournamentComponent);

    this.isLoading = false;

  }

}
