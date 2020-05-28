import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelUsuarioComponent } from './panel-usuario/panel-usuario.component';

const routes: Routes = [
  {
    path: 'listar',
    component: PanelUsuarioComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UsuariosRoutingModule {}