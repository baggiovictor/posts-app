import {Component} from '@angular/core';
import {Pensamento} from "../pensamento";
import {PensamentoService} from "../pensamento.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private service: PensamentoService, private router: Router) { }

  criarPensamento() {
    this.service.criar(this.pensamento)
      .subscribe(()=> this.router.navigate(['/listar-pensamento']))
  }

  cancelar() {
    this.router.navigate(['/listar-pensamento']);
  }


}
