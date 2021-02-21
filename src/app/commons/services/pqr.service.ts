import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PqrService {
  endpoint: string;
  path: string;

  constructor(protected http: HttpClient) {
    this.endpoint = environment.endpoint;
    this.path = environment.pqrPath;
  }

  getAll() {
    return this.http.get(`${this.endpoint}${this.path}all`);
  }

  create(obj: any) {
    return this.http.post(`${this.endpoint}${this.path}`, obj);
  }

  getAllPccByUserId(username: string) {
    return this.http.get(`${this.endpoint}${this.path}username?username=${username}`);
  }
}
