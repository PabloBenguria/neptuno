import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
 
import { Cliente } from '../models/cliente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClienteService {

	private clientesUrl = 'https://api-neptuno.herokuapp.com/clientes';  // URL to web api
	private clientes: Cliente[];

  constructor(
  	private http: HttpClient
  ) { }

  getClientes (): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl)
      .pipe(
        tap(clientes => console.log('Listado de clientes recibido con éxito.')),
        catchError(this.handleError('getClientes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

}
