import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path: "primeira-pagina"}

]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
