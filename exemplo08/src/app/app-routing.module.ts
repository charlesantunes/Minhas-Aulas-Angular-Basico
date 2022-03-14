import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';     //14-importação criada automaticamente.
import { Error404Component } from './error404/error404.component';  //11-importação criada automaticamente.
import { InicioComponent } from './inicio/inicio.component';   //05-importação criada automaticamente.
import { SobreComponent } from './sobre/sobre.component';      //07-importação criada automaticamente.

//03-Routes ou rotas é uma estrutura que faz a página ser aberta instantânea, sem carregamento.
const routes: Routes = [
  {path: 'inicio', component: InicioComponent},  //04-path é o nome da rota, no caso inicio do menu
  {path: 'sobre', component: SobreComponent, canActivate: [AuthGuard]},  /*06-path é o nome da rota, 
  no caso inicio do menu, 13-adionando uma segurança para acessar a página "sobre"*/
  {path: '', redirectTo:'inicio', pathMatch:'full'}, //08-pathMatch é quando na url estiver em branco ou não especificado uma página, redireciona p/ inicio.
  {path: '**', component: Error404Component}  //10-** informa que a pagina não existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
