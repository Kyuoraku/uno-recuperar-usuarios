import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario';

@Component({
  selector: 'lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  @Input() usuarios$: Observable<Usuario[]>;
  cantidadUsuarios: number = 0;

  constructor() { }

  ngOnInit() {
    this.usuarios$.subscribe(usuarios => {
      this.cantidadUsuarios = usuarios && usuarios.length;
    })

  }

}