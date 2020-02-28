import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workout } from './shared/models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  ping$(): Observable<any> {
    return this.http.get('https://api.whatstheworkout.com/xping/auth');
  }

  getAllWorkouts$(): Observable<Workout[]> {
    return this.http.get<Workout[]>('https://api.whatstheworkout.com/workouts/get-all-workouts')
  }
}
