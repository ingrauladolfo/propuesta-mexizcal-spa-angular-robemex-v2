import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RitualComponent } from './componentes/ritual/ritual.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
import { CocteleriaComponent } from './componentes/cocteleria/cocteleria.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';


const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'nuestro-ritual', component:RitualComponent},
  {path:'nuestra-historia', component: HistoriaComponent},
  {path:'nuestra-cocteleria', component: CocteleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
