import { Cliente } from './../models/Cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url: string = 'http://localhost:9090/api/clientes/';

  constructor(private http: HttpClient) { }

  ListarTodos() {
    return this.http.get<Cliente[]>(this.url + '/listarTodos');
  }
  GuardarDatos(obj: Cliente): Observable<any> {
    return this.http.post(`${this.url}/guardar`, obj);
  }
  Eliminar(id?: number) {
    return this.http.delete(this.url + '/eliminar/' + id);
  }
}
