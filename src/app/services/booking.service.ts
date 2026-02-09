import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

export interface Booking {
  awb: string;
  origin: string;
  destination: string;
  weight: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private auth: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.auth.getToken();
    return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  }

  createBooking(payload: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/cargo/book`, payload, { headers: this.getHeaders() });
  }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/cargo/bookings`, { headers: this.getHeaders() });
  }
}
