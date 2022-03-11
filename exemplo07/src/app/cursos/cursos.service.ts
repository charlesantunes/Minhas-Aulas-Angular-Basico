import { Injectable } from '@angular/core';
import { Curso } from './Curso';  //93-importar a classe Curso, para o vetor Curso[]

@Injectable({
  providedIn: 'root' //87-root, informa quem tem acesso a esse componente cursos.service.ts, no caso root é todos os componentes tem acesso total desse serviço
})

//class
export class CursosService {

  constructor() { }

  //92-vetor de Cursos
    private vetorCursos:Curso[] = [
      new Curso("Angular",800,"Desenvolvimento" ),
      new Curso("PHP",590,"Desenvolvimento"),
      new Curso("Photoshop",470,"Design")

  ];
  
  //cadastro de cursos
    public cadastrar(objcurso:Curso){  //94-na função cadastrar foi criado o objeto objcurso que se baseia pela classe Curso, sempre o objcurso vai carregar os valores da Classe Curso.
      this.vetorCursos.push(objcurso); //95-chama o vetor, usa a função push() que cadastrar uma informação em um vetor, enviando o objcurso para armazenar as informações.
    }
  
  //Seleção de cursos
    public listar(){    //96-função para apenas exibir elementos
      return this.vetorCursos; 
    }
  
  //Alteração de cursos
    public alterar(id:number, objcurso:Curso){  //97-id é para saber qual o indice que sera feita a alteração, objcurso para carregar as informações da classe Curso 
      this.vetorCursos[id] = objcurso;  //98-pegar o vetor na posição indicada no id e colocar o novo valor que está no objcurso.
    }

  //Exclusão de cursos
    public excluir(id:number){  //99-basta identificar o indice representado pelo id e excluir.
      this.vetorCursos.splice(id,1);  //100-splice é uma função de exclusão onde id é o indice para excluir e 1 é a qtde de itens a ser excluido.
    }

}
