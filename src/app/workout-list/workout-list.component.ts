import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { Workout } from '../shared/models/workout.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  public workouts: Workout[];

  constructor(public auth: AuthService, public apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllWorkouts();
  }

  public async getAllWorkouts() {
    this.apiService.getAllWorkouts$().subscribe(res => {
      this.workouts = res
    });
  }
}
