import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Step } from '../shared/models/workout.model'

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {

  public name: string;
  public description: string;
  public steps: Step[] = [];

  constructor(public apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  public async postWorkout() {
    await this.apiService.postWorkout$({
      name: this.name,
      description: this.description,
      steps: this.steps
    });
  }

  public addStep() {
    this.steps.push({ stepType: null, note: null, durationType: null, durationValue: null, effort: null });
  }

  public removeStep(index: number) {
    this.steps.splice(index, 1);
  }
}
