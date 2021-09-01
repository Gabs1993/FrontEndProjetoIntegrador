import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [

  {path: '', redirectTo: 'menu', pathMatch: 'full'},


  {path: 'menu', component: MenuComponent },
  {path: 'home', component: HomeComponent},
  {path: 'rodape', component: RodapeComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'cadastrar', component: CadastrarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
