import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpointAuth: string = environment.apiUsuarios + "auth/login";
  endpointRegister: string = environment.apiUsuarios + "registrar";

  constructor(private httpClient: HttpClient) { }

  auth(data: any) {
    return this.httpClient.post(this.endpointAuth, data);
  }

  register(data: any) {
    return this.httpClient.post(this.endpointRegister, data);
  }

}
