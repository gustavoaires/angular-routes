import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DetalheComponent } from './detalheproduto/detalheproduto.component';
import { ProdutoService } from './service/produto.service';
import { AppNav } from './app-nav/appnav.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    AppNav,
    CadastrarComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
