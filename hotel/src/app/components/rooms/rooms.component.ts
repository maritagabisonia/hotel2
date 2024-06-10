import { Component } from '@angular/core';
import { RoomType } from '../../models/RoomTypes';
import { RoomsService } from '../../services/rooms.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  rooms: RoomType[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private roomsService: RoomsService) { }

  ngOnInit() {
    this.roomsService.getRoomTypes().subscribe(data => {
      console.log("API CALL ENDED");
      console.log(data);

      this.rooms = data;
    }
    );
  }
}
