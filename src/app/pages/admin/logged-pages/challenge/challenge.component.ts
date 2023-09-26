import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      startData: ['', Validators.required],
      startHour: ['', Validators.required],
      endData: ['', Validators.required],
      endHour: ['', Validators.required],
      map: ['', Validators.required],
      games: ['', Validators.required],

      })
  }

  criarDesafio() {
    console.log(this.form.value);
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

}
