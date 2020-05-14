export interface Workout {
    workoutId: string;
    userId: string;
    name: string;
    description: string;
    steps: Step[];
}

export interface Step {
    stepType: string;
    note: string;
    durationType: string;
    durationValue: number;
    effort: number;
}
