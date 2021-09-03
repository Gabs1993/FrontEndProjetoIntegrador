import { CriadoresComponent } from './criadores/criadores.component';
import { OProjetoComponent } from './o-projeto/o-projeto.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},

  //{path: 'inicio', component: InicioComponent},
  //{path: 'tema', component: TemaComponent}
  {path: 'home', component: HomePageComponent},
  {path: 'projeto', component: OProjetoComponent},
  {path: 'criadores', component: CriadoresComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
