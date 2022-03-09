import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  //Criar imagem
  nome:String = "Belém";
  image:String = "https://i.ytimg.com/vi/pRLkN71Q0Kc/maxresdefault.jpg";
  numero1:number = 1616;
  numero2:number = 2022;

  //Função no TypeScript
  mensagem(){
    alert("Belém, Cidade das Mangueiras.");
  }

  //objeto, any é qualque tipo.
  pessoa:any = {
    nome:"charles",
    idade:26,
    cidade:"Belém"
  };
}
