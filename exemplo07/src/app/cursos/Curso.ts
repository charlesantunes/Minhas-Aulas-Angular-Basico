//88-Esse componente foi criado para servir de uma especie de modelo, para manipular no casos os cursos.

//89-classe
export class Curso{
    
    //90-   atributos
    public nomeCurso:string;
    public valorCurso:number;
    public areaCurso:string;

    //91-Construtor
    constructor(nome:string, valor:number, area:string){
    this.nomeCurso = nome;
    this.valorCurso = valor;
    this.areaCurso = area;
    }
}