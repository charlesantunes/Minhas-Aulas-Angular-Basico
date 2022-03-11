import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';

import { FormsModule } from '@angular/forms';  //114-corrigir uns erros do formulário que aconteceram no código

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   //115- adicionar para ser importado pelos componentes o 114
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
