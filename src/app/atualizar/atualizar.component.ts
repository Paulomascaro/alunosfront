import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../model/aluno';
import { WebService } from '../web.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {
  aluno: Aluno = new Aluno()
  constructor(private web: WebService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.web.getAlunosById(id!).subscribe((response)=>{
      if(response.ok){
        this.aluno = response.body!
      }
    }) 
  
  }

  editarAluno(forms: NgForm) {
    if(forms.valid){
      this.web.setAluno(this.aluno).subscribe((res)=>{
        if(res.ok){
         alert("Editado com Sucesso!")
        this.router.navigate(["alunos"])
        }
      })
    }
  }

}
