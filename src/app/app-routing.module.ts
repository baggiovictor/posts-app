import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CriarPensamentosComponent} from "./components/pensamentos/criar-pensamentos/criar-pensamentos.component";
import {ListarPensamentoComponent} from "./components/pensamentos/listar-pensamento/listar-pensamento.component";

const routes: Routes = [
  {
    path: 'criar-pensamento',
    component: CriarPensamentosComponent
  },
  {
    path: 'listar-pensamento',
    component: ListarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
