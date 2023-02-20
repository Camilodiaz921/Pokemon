import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent} from './vistas/principal/principal.component';

const routes: Routes = [
  { path:'' , redirectTo:'Principal' , pathMatch:'full'},
  { path:'Principal', component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PrincipalComponent]