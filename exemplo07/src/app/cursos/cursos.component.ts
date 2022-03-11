import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Curso } from './Curso';  //102 -import para os atributos 101
import { CursosService } from './cursos.service';

@Component({  
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

//106- comentado todo o 101 para evitar erro na criação da página, adicionei '!' corrigiu o erro.  
//101-Atributos
  private vetorCursos!:Curso[];
  private curso!:Curso;   //objCurso é responsavél por manipular os elementos da classe Curso.
  private id!:number;  //id que representa o indice para identificar os elementos do objCurso.


  //Construtor 
  //103-será inicializado para ter acesso aos metodos e atributos do componente cursos.service.ts
  constructor(private servico:CursosService ) { }

  //111-Inicialização, primeiro tira o comentário do 106
  ngOnInit() {
    this.id = -1; //120-id precisa iniciar do campo antes do zero para realizar a edição
    this.curso = new Curso();   //111 - objeto curso vai ser usado no ngModel da ordem 113
    this.vetorCursos = this.servico.listar(); //111-inicializar com listar() os elementos do vetor do cursos.service.ts
  }

  //114-cadastrar
  cadastrar(){
    this.servico.cadastrar(this.curso);
    this.curso = new Curso(); //limpar depois de digitar
  }

  //115-Excluir
  excluir(id:number){
    this.servico.excluir(id); //id é o indice do vetor
  }

  //117-Editar
  editar(id:number){
    this.id = id;   //119-na horas de chamar, igual o vetor para editar

    this.curso = new Curso(   //118-para editar, precisar chamar todos os elementos do vetor
      this.vetorCursos[id].nomeCurso,
      this.vetorCursos[id].valorCurso,
      this.vetorCursos[id].areaCurso
    );
  }

  //Atualizar
  atualizar(){
    this.servico.alterar(this.id, this.curso)
    this.curso = new Curso();
  }

}
