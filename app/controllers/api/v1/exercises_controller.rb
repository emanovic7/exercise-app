class Api::V1::ExercisesController < ApplicationController

  def index
    render json: Exercise.all
  end

  def create
    exercise = Exercise.create(exercises_params)
    render json: exercise
  end

  def destroy
    Exercise.destroy(params[:id])
  end

  def update
    exercise = Exercise.find(params[:id])
    exercise.update_attributes(exercise_params)
    render json: exercise
  end

  private

  def exercises_params
    params.require(:exercise).permit(
    :id,
    :name,
    :description,
    :equipment,
    :body_part)
  end



end
