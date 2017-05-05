import { Routes, RouterModule } from "@angular/router";
import { MostrarComponent } from './mostrar/mostrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

const APP_ROUTES: Routes = [
  {path:"", redirectTo: "cadastrar", pathMatch:"full"},
  {path:"cadastrar", component: CadastrarComponent},
  {path:"mostrar", component: MostrarComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
