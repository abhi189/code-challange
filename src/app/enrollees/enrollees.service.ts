import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Enrollee } from './enrollees.model';

@Injectable({
  providedIn: 'root',
})
export class EnrolleesService  {
  protected REQUEST_URL = environment.apiUrl;
  private baseUrl = `${this.REQUEST_URL}/enrollees`;

  constructor(protected http: HttpClient) {}

  getAll(): Observable<Enrollee[]> {
      return this.http.get<Enrollee[]>(this.baseUrl)
  }

  get(id: string): Observable<Enrollee> {
      const url = `${this.baseUrl}/${id}`
      
      return this.http.get<Enrollee>(url)
  }

  put(id: string, body: Enrollee): Observable<Enrollee> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.put<Enrollee>(url, body)
  }
}
