import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from './model/aluno';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  
  baseurl="http://localhost:8081/api/alunos/"

  constructor(private http: HttpClient) { }

  getAlunos() {
    return this.http.get<Aluno[]>(this.baseurl, {observe: "response"})
  }

  saveAluno(aluno: Aluno) {
    let alunoData = new HttpParams()
    alunoData = alunoData.set("nome", aluno.name)
    alunoData = alunoData.set("idade", aluno.idade)
    alunoData = alunoData.set("endereco", aluno.endereco)
    alunoData = alunoData.set("sexo", aluno.sexo)
    alunoData = alunoData.set("email", aluno.email) 
    alunoData = alunoData.set("periodo", aluno.periodo)
    return this.http.post<Aluno>(this.baseurl, alunoData, {observe: "response"})
  }

  setAluno(aluno: Aluno) {
    let alunoData = new HttpParams()
    alunoData = alunoData.set("nome", aluno.name)
    alunoData = alunoData.set("idade", aluno.idade)
    alunoData = alunoData.set("endereco", aluno.endereco)
    alunoData = alunoData.set("sexo", aluno.sexo)
    alunoData = alunoData.set("email", aluno.email) 
    alunoData = alunoData.set("periodo", aluno.periodo)
    return this.http.put<Aluno>(this.baseurl+aluno.id, alunoData, {observe: "response"})
  }

  getAlunosById(id: string) {
    return this.http.get<Aluno>(this.baseurl + id, {observe: "response"})
  }

  deletaAlunoById(aluno: Aluno) {
    return this.http.delete<Aluno>(this.baseurl + aluno.id, {observe: "response"})
  }

}
