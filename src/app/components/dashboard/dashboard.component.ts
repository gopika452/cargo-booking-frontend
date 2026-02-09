import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookingFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  bookings: any[] = [];
}

