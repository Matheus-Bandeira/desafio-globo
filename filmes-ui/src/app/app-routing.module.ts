import { CadastroComponent } from './components/pages/filme-components/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { GerenciamentoUsuarioComponent } from './components/pages/gerenciamento-usuario/gerenciamento-usuario.component';
import { ListagemFilmesComponent } from './components/pages/filme-components/listagem/listagem-filmes.component';
import { DetalheComponent } from './components/pages/filme-components/detalhe/detalhe.component';
import { CadastroUsuarioComponent } from './components/pages/usuario-components/cadastro-usuario/cadastro-usuario.component';
import { EditarUsuarioComponent } from './components/pages/usuario-components/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cadastrar-conta', component: RegisterComponent},
  {path: 'home', component: HomeComponent, canActivate:[CheckoutGuard] },
  {path: 'gerenciamento-usuarios', component: GerenciamentoUsuarioComponent, canActivate:[CheckoutGuard] },
  {path: 'editar-usuario/:id', component: EditarUsuarioComponent, canActivate:[CheckoutGuard] },
  {path: 'listagem-filmes', component: ListagemFilmesComponent, canActivate:[CheckoutGuard] },
  {path: 'detalhes-filmes/:id', component: DetalheComponent, canActivate:[CheckoutGuard] },
  {path: 'cadastrar-filmes', component: CadastroComponent, canActivate:[CheckoutGuard] },
  {path: 'cadastrar-usuario', component: CadastroUsuarioComponent, canActivate:[CheckoutGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
