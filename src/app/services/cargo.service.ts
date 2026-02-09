import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private baseUrl = 'http://localhost:8080/api/cargo';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('jwtToken');
    return { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) };
  }

  getAllBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, this.getHeaders());
  }

  getBookingByAwb(awb: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${awb}`, this.getHeaders());
  }

  createBooking(booking: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/book`, booking, this.getHeaders());
  }
}
