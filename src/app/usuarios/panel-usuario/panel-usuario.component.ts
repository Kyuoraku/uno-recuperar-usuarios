import { Component, OnInit, Output } from '@angular/core';
import { UserSearchService } from '../user-search.service';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario';

@Component({
  selector: 'panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {

  //@Output() public 
  usuarios$: Observable<Usuario[]>;
  defaultPage = 1;
  defaultPerPage = 20;

  constructor(
    private userSearchService: UserSearchService
  ) { }

  ngOnInit() {
    this.fetchUsuarios(null);
  }

  fetchUsuarios(perPage){
    this.usuarios$ = this.userSearchService.fetchUsers(this.defaultPage, perPage? perPage : this.defaultPerPage);
  }

  
}