import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workout } from './shared/models/workout.model';
import { Endpoints } from './utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  ping$(): Observable<any> {
    return this.http.get(Endpoints.XPING_AUTH);
  }

  getAllWorkouts$(): Observable<Workout[]> {
    return this.http.get<Workout[]>(Endpoints.GET_ALL_WORKOUTS)
  }
}
