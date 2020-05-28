import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { map , switchMap } from 'rxjs/operators';

@Injectable()
export class UserSearchService {

  private usersUrl = "https://reqres.in/api/users";

  constructor(
    private http: HttpClient
  ) { }

  fetchUsers(page, perPage): Observable<Usuario[]>{
    let url = `${this.usersUrl}?page=${page}&per_page=${perPage}`;
    return this.http.get<Usuario[]>(url)
      .pipe(
        map(response => {
          let usuarios: Usuario[];
          let dataSource = (response && response["data"]) || [];

          usuarios = dataSource.map( u => {
            return {
              userId: u["id"],
              nombre: u["first_name"],
              apellido: u["last_name"],
              email: u["email"],
              avatar: u["avatar"]
            };
          });
          
          return usuarios;
        })
      );
  }
}