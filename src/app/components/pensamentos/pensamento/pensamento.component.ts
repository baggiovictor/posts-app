import {Component, Input, OnInit} from '@angular/core';
import {Pensamento} from "../pensamento";

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Victor',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    return this.pensamento.conteudo.length >= 256 ? 'pensamento-g' : 'pensamento-p'
  }

}
