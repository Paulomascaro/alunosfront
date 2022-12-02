import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { AtualizarComponent } from './atualizar/atualizar.component';

const routers: Routes = [
  {path:"alunos", component: AlunosComponent},
  {path:"cadastrar", component: CadastrarComponent},
  {path:"atualizar/:id", component: AtualizarComponent},
  {path:"", redirectTo: "/alunos", pathMatch: "full"}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
