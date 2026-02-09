import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService, Booking } from '../../services/booking.service';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {

  awb = '';
  origin = '';
  destination = '';
  weight: number | null = null;

  message = '';   // ✅ FIXED: property now exists
  error = '';

  constructor(private bookingService: BookingService) {}

  submitBooking() {
    this.message = '';
    this.error = '';

    if (!this.awb || !this.origin || !this.destination || !this.weight) {
      this.error = 'All fields are required';
      return;
    }

    const payload: Booking = {
      awb: this.awb,
      origin: this.origin,
      destination: this.destination,
      weight: this.weight
    };

    this.bookingService.createBooking(payload).subscribe({
      next: () => {
        this.message = '✅ Booking created successfully';
        this.awb = '';
        this.origin = '';
        this.destination = '';
        this.weight = null;
      },
      error: () => {
        this.error = '❌ Failed to create booking';
      }
    });
  }
}
