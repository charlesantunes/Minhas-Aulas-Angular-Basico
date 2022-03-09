import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pag1:boolean = true;
  
  alterarPagina(){
    this.pag1 = !this.pag1;
  }
}