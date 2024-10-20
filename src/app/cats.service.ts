import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';

interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root'
})


export class CatsService {
  private apiUrl = "https://api.thecatapi.com/v1/images/search";
  private apiKey = environment.catApiKey;
  constructor(private http: HttpClient) {}

  getCats(): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey  
    });
    return this.http.get(this.apiUrl, { headers });
  }
}
