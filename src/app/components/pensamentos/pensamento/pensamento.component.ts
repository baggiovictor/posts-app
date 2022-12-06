import {Component, Input, OnInit} from '@angular/core';
import {Pensamento} from "../pensamento.interface";
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Victor',
    modelo: 'modelo1',
    favorito: false
  }

  constructor(private service: PensamentoService) { }

  larguraPensamento(): string {
    return this.pensamento.conteudo.length >= 256 ? 'pensamento-g' : 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    return this.pensamento.favorito === false ? 'inativo' : 'ativo';
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe();
  }

}
