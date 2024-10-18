import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Quote {
  id: number;
  quote: string;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  getRandomQuote(): Observable<any> {
    return this.http.get<any>('https://dummyjson.com/quotes/random');
  }
}
