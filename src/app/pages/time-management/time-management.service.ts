import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeManagementService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3001/getUsers');
  }

  saveHoursWorked(entry: { user_id: number, month: number, hours_worked: number }): Observable<any> {
    return this.http.post('http://localhost:3001/saveHoursWorked', entry);
  }
}
