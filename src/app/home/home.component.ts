import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

export interface Appointment {
  patientName: string;
  time: string;
  type: string;
  status: string;
  statusClass: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  todayAppointments: Appointment[] = [
    {
      patientName: 'John Doe',
      time: '09:00 AM',
      type: 'General Checkup',
      status: 'Confirmed',
      statusClass: 'badge-confirmed'
    },
    {
      patientName: 'Jane Smith',
      time: '10:30 AM',
      type: 'Dental Cleaning',
      status: 'Pending',
      statusClass: 'badge-pending'
    },
    {
      patientName: 'Mike Johnson',
      time: '02:00 PM',
      type: 'Follow-up',
      status: 'Cancelled',
      statusClass: 'badge-cancelled'
    }
  ];

  loadMore(event: Event) {
    event.preventDefault();
    // Implement load more logic here
  }
}
