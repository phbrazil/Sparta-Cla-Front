import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services';

import { cpf } from 'cpf-cnpj-validator';

@Component({
  selector: 'app-buy-credits',
  templateUrl: './buy-credits.component.html',
  styleUrls: ['./buy-credits.component.css']
})
export class BuyCreditsComponent implements OnInit {

  readonly codPoints = 0.11;
  numCPF: string;
  cpfValid: boolean = false;
  elite: number;
  platinum: number;
  premium: number;
  outroValor: number;
  valorParcial: number = 0;
  valorTotal: number;
  clicked1: boolean = false;
  clicked2: boolean = false;
  clicked3: boolean = false;
  inputCodPoints: string;
  formBuyCredits: FormGroup;

  constructor(private fb: FormBuilder,  private alertService: AlertService) { }



  ngOnInit(): void {
    this.valorTotal = 0;
    this.createdForm();
  }

  createdForm() {
    this.formBuyCredits = this.fb.group({
      nomeCartao: ['', [Validators.required]],
      numeroCartao: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dataExp: ['', [Validators.required]]
    })
  }

  onKeyUp(x){
    let valorInput = x.target.value;
    this.valorParcial = this.codPoints * valorInput;
    this.valorTotal =  this.valorParcial;
  }

  select(x, valor :number){
    console.log("x: ", x, "  ", "valor: ", valor )
    this.inputReset()
    if(valor == 10) {
      this.clicked1 = true;
      this.clicked2 = false;
      this.clicked3 = false;
    }
    else if(valor == 30){
      this.clicked2 = true;
      this.clicked1 = false;
      this.clicked3 = false;
    }
    else if(valor == 50){
      this.clicked3 = true;
      this.clicked1 = false;
      this.clicked2 = false;
    }
    else{  return null  }

    let valorSelecionado = valor
    this.valorTotal = valorSelecionado
  }

  reset(){
    this.elite = 0;
    this.premium = 0;
    this.platinum = 0;
    this.clicked1 = false;
    this.clicked2 = false;
    this.clicked3 = false;
    this.valorTotal = 0;
  }

  inputReset(){
    this.inputCodPoints = '';
    this.valorParcial = 0;
  }

  cpf() {
    this.cpfValid = cpf.isValid(this.numCPF);
    console.log(this.numCPF);
    console.log(this.cpfValid);
  }

  onSubmit() {

    if(this.valorTotal == 0){
      this.alertService.error('O valor não pode ser R$0', 'Selecione um valor de cod points', { keepAfterRouteChange: true });
    } else if(this.formBuyCredits.invalid) {
      this.alertService.error('Formulário incorreto', 'tente novamente', { keepAfterRouteChange: true });
    } else {
      alert("Compra efetuada")
      console.log(this.formBuyCredits);
    }

  }

  calculoPontos() {
  }

}
