import { Component, OnInit } from '@angular/core';
import { Pensamento } from "../pensamento";
import {PensamentoService} from "../pensamento.service";

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    console.log(this.service.listar())
    this.service.listar().pipe().subscribe(listaPesamento => {
      this.listaPensamentos = listaPesamento;
    })
  }

}
