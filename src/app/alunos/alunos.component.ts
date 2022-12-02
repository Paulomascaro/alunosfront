import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../model/aluno';
import { WebService } from '../web.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos!: Aluno[]

  constructor(private web: WebService, private router: Router) { }

  ngOnInit(): void {
    this.web.getAlunos().subscribe((response)=>{
      if(response.ok) {
        this.alunos = response.body!
        console.log(response.body)
      }
    })

  }

  adicionarAluno () {
  this.router.navigate(["cadastrar"])
    console.log("cadastrar");  
  }

  deletaAluno(aluno: Aluno) {
    this.web.deletaAlunoById(aluno).subscribe((response)=>{
      if(response.ok){
        alert("Deletado com Sucesso!")
        this.alunos.forEach((alunobuscado)=>{
          if(alunobuscado.id == aluno.id) {
            let index = this.alunos.indexOf(aluno)
            this.alunos.splice(index, 1)
          }
        }) 
      }
    })
  }

  editarAluno(aluno: Aluno) {
    this.router.navigate(["atualizar", aluno.id])
    // this.web.setAluno(aluno)
  }

}
