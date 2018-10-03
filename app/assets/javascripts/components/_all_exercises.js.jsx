

const AllExercises = (props) => {

    var exercises = props.exercises.map((exercise) => {
      return(
        <div key={exercise.id}>
          <Exercise exercise={exercise} />
        </div>
      )
    })


    return(
      <div>
        {exercises}
      </div>
    )
}
