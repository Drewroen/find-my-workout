export class Endpoints {
    public static GET_ALL_WORKOUTS = "https://api.whatstheworkout.com/api/Workout?AllWorkouts=true";
    public static GET_USER_WORKOUTS = "api.whatstheworkout.com/api/Workout?AllWorkouts=false";
    public static GET_WORKOUT = "api.whatstheworkout.com/api/Workout/{workoutId}"
    public static POST_WORKOUT = "https://api.whatstheworkout.com/api/Workout";
    public static PUT_WORKOUT = "api.whatstheworkout.com/api/Workout/{workoutId}";
    public static DELETE_WORKOUT = "api.whatstheworkout.com/api/Workout/{workoutId}";

    // Will eventually contain some public endpoints perhaps
    public static PUBLIC_ENDPOINTS = [];
}
