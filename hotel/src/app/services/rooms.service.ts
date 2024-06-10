import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomType } from '../models/RoomTypes';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  Rooms: RoomType[] = []

  constructor(private http: HttpClient) { }



  getRoomTypes(): Observable<RoomType[]> {
    return this.http.get<RoomType[]>("https://ketiketelauri123-001-site1.jtempurl.com/api/roomtypes/getallroomtypewithimages")
  }

  get RoomsList(): RoomType[] {
    return this.Rooms;
  }
  set RoomsList(list: RoomType[]) {
    this.Rooms = list;
  }

}
