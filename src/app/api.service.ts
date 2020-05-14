import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Workout } from './shared/models/workout.model';
import { Endpoints } from './utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getAllWorkouts$(): Observable<Workout[]> {
    return this.http.get<Workout[]>(Endpoints.GET_ALL_WORKOUTS);
  }

  postWorkout$(workout: Object): void {
    this.http.post<void>(Endpoints.POST_WORKOUT, workout).subscribe(response => {});
    return;
  }
}
