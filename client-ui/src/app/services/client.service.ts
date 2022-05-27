import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IClient } from '../models/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postClientRegistryForm(clientRegistry: IClient): Observable<any> {
    return this.http.post('url', clientRegistry);
  }
  

  // TODO; setup a BE end-points
}
