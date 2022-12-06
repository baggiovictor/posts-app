import {Component, OnInit} from '@angular/core';
import {Pensamento} from "../pensamento.interface";
import {PensamentoService} from "../pensamento.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit{

  form!: FormGroup;

  constructor(private service: PensamentoService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      conteudo: ['', Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      autoria: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    console.log(this.form.get('autoria')?.errors)
    if (this.form.valid) {
      this.service.criar(this.form.value)
        .subscribe(()=> this.router.navigate(['/listar-pensamento']))
    }
  }

  cancelar() {
    this.router.navigate(['/listar-pensamento']);
  }

  habilitarBotao(): string {
    return this.form.valid ? 'botao' : 'botao__desabilitado'
  }
}
