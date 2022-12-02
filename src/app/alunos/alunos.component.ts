import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';
import { WebService } from '../web.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {


  alunos!: Aluno[]

  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.web.getAlunos().subscribe((response)=>{
      if(response.ok) {
        this.alunos = response.body!
        console.log(response.body)
      }
    })

    // this.web.setAluno(aluno: Aluno).subscribe((response)=> {
    //   if(response.ok) {
    //     this.aluno = response.body!
    //     console.log(response.body)
    //   }
    // })
  }

  adicionarAluno () {
    console.log("entrou");  
  }

  deletaAluno(aluno: Aluno) {
    console.log(aluno)
  }

  editarAluno(aluno: Aluno) {
    this.web.setAluno(aluno)
  }

}
