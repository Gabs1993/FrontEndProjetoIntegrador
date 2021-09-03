//import { CadastrarComponent } from './cadastrar/cadastrar.component';
//import { EntrarComponent } from './entrar/entrar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OProjetoComponent } from './o-projeto/o-projeto.component';
import { CriadoresComponent } from './criadores/criadores.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreNosComponent,
    HomeComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    HomePageComponent,
    OProjetoComponent,
    CriadoresComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
