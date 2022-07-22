import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

const routes: Routes = [
   {path: "primeira-pagina", component: PrimeiraPaginaComponent },
   {path: "segunda-pagina", component: SegundaPaginaComponent },
   {path: "", redirectTo: "primeira-pagina", pathMatch: "full"},
   {path: "pagina-com-parametros/id", component: PaginaComParametrosComponent},
   

]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
