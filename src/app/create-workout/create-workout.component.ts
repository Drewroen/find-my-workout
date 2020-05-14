import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Step } from '../shared/models/workout.model'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
    this.steps.push({ stepType: "Step", note: null, durationType: "Miles", durationValue: 1.0, effort: .5 });
  }

  public removeStep(index: number) {
    this.steps.splice(index, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.steps, event.previousIndex, event.currentIndex);
  }
}
