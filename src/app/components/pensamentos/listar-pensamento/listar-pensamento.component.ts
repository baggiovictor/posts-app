import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from "../pensamento.interface";
import {PensamentoService} from "../pensamento.service";

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favorito: boolean = false;
  listaFavoritos: Pensamento[] = []
  titulo: string = 'Meu mural'

  constructor (private service: PensamentoService, private router: Router ) { }

  ngOnInit (): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos () {
    this.service.listar(++this.paginaAtual, this.filtro, this.favorito)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        if(!listaPensamentos.length) {
          this.haMaisPensamentos = false
        }
      })
  }

  pesquisarPensamento () {
    this.haMaisPensamentos = true
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe(listaPensamento => {
      this.listaPensamentos = listaPensamento
    })
  }

  listarFavoritos() {
    this.titulo = 'Meus Favoritos'

    this.favorito = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe(favoritos => {
      this.listaPensamentos = favoritos;
      this.listaFavoritos = favoritos;
    })
  }

  recarregarComponente() {
    this.favorito = false;
    this.paginaAtual = 1;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }
}
