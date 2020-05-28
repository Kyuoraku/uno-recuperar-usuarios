import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const usuariosRoutes: Routes = [
  {
    path: '',
    loadChildren: './usuarios/usuarios.module#UsuariosModule'
  }
]

const routes: Routes = [
  {
    path: 'usuarios',
    children: usuariosRoutes
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, 
                {useHash: false , enableTracing: false}) 
            ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}