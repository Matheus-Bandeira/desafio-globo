import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  endpointUsuariosAtivos: string = "http://localhost:8080/usuario";
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpointUsuariosAtivos);
  }

  deleteUser(id: number) {
      return this.httpClient.delete(`${this.endpointUsuariosAtivos}/${id}`);
  }

  editUser(id: number, user: any) {
    return this.httpClient.put(`${this.endpointUsuariosAtivos}/${id}`, user);
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.endpointUsuariosAtivos}/${id}`);
  }
}
