import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Fruit{
  id: number,
  name: string,
  quantity: number,
  price:number
}

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private apiUrl = 'http://localhost:3000/fruits';

  constructor(private http: HttpClient) { }
  

  getFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.apiUrl);
  }

  getFruit(id: number): Observable<Fruit> {
    return this.http.get<Fruit>(`${this.apiUrl}/${id}`);
  }

  createFruit(fruit: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>(this.apiUrl, fruit);
  }

  updateFruit(fruit: Fruit): Observable<Fruit> {
    return this.http.put<Fruit>(`${this.apiUrl}/${fruit.id}`, fruit);
  }

  deleteFruit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }



}
