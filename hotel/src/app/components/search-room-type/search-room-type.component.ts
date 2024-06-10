import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-search-room-type',
  standalone: true,
  imports: [CalendarModule, InputNumberModule, FormsModule],
  templateUrl: './search-room-type.component.html',
  styleUrl: './search-room-type.component.css'
})
export class SearchRoomTypeComponent {
  datetime12h: Date[] | undefined;

  datetime24h: Date[] | undefined;

  time: Date[] | undefined;
}
