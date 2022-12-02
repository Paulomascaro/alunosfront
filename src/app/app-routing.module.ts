import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';

const routers: Routes = [
  {path:"alunos", component: AlunosComponent},
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
