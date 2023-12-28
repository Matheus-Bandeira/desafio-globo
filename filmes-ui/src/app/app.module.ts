import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { GerenciamentoUsuarioComponent } from './components/pages/gerenciamento-usuario/gerenciamento-usuario.component';
import { ListagemFilmesComponent } from './components/pages/filme-components/listagem/listagem-filmes.component';
import { CadastroComponent } from './components/pages/filme-components/cadastro/cadastro.component';
import { DetalheComponent } from './components/pages/filme-components/detalhe/detalhe.component';
import { CadastroUsuarioComponent } from './components/pages/usuario-components/cadastro-usuario/cadastro-usuario.component';
import { EditarUsuarioComponent } from './components/pages/usuario-components/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    GerenciamentoUsuarioComponent,
    ListagemFilmesComponent,
    CadastroComponent,
    DetalheComponent,
    CadastroUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [CheckoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
