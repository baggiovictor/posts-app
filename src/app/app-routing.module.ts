import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CriarPensamentosComponent} from "./components/pensamentos/criar-pensamentos/criar-pensamentos.component";
import {ListarPensamentoComponent} from "./components/pensamentos/listar-pensamento/listar-pensamento.component";
import {ExcluirPensamentoComponent} from "./components/pensamentos/excluir-pensamento/excluir-pensamento.component";
import {EditarPensamentoComponent} from "./components/pensamentos/editar-pensamento/editar-pensamento.component";

const routes: Routes = [
  {
    path: 'criar-pensamento',
    component: CriarPensamentosComponent
  },
  {
    path: 'listar-pensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluir-pensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editar-pensamento/:id',
    component: EditarPensamentoComponent
  },
  {
    path: '**',
    component: ListarPensamentoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
