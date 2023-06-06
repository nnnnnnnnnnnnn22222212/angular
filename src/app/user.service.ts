import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Users } from './common/user';
import { Products } from './common/main';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(id: number): Observable<Users[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  signup(user: any): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, user);
  }
  getCart(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    console.log(url);
    return this.http.get<any>(url);
  }
  addToCart(userId: number, items: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}/cart`;

    return this.http.get<Users>(`${this.apiUrl}/${userId}`).pipe(
      map((user: Users) => {
        console.log(user.cart);
      
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error.message || 'Server error');
      })
    );
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}`;
    const body = { username, password };

    return this.http.get<any>(url);
  }
}
