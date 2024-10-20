import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  constructor(private http: HttpClient) {}

  getCat(): Observable<any> {
    return this.http.get<any>(
      ' https://api.thecatapi.com/v1/images/search?api_key=live_aOd70uiHEqn1XZXnG38QrjDvp3cEQ3v277YS6Y6b5POn2ANceyEIz1cJbP0gXHiw'
    );
  }
}
