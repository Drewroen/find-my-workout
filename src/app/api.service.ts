import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Workout } from './shared/models/workout.model';
import { Endpoints } from './utils/constants';
import { MOCK_WORKOUT_LIST } from './mock/mock-values';

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
    return of(MOCK_WORKOUT_LIST);
    //return this.http.get<Workout[]>(Endpoints.GET_ALL_WORKOUTS)
  }
}
