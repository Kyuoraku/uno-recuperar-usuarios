import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit {

  @Input() usuario: Usuario;
  
  constructor() { }

  ngOnInit() {
  }

}