import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelUsuarioComponent } from './panel-usuario/panel-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UserSearchService } from './user-search.service';

import { MaterialModule } from '../material';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule
  ],
  declarations: [
    ListaUsuariosComponent,
    VistaUsuarioComponent,
    PanelUsuarioComponent
  ],
  providers: [UserSearchService]
})
export class UsuariosModule { }