import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluno } from '../model/aluno';
import { WebService } from '../web.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

   aluno: Aluno = new Aluno()

  constructor(private web: WebService, private router: Router) { }

  ngOnInit(): void {
    // closeModal() {
    //   this.modal = false
    //   this.emitCloseModalEditar.emit(true)
    //   this.especie = new Especie()
    // }
  
  }

  salvarAluno(forms: NgForm) {
    if(forms.valid){
      this.web.saveAluno(this.aluno).subscribe((res)=>{
        if(res.ok){
         alert("Cadastrado com Sucesso!")
        this.router.navigate(["alunos"])
        }
      })
    }
  }
  //  console.log("teste");
  
}