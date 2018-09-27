

const AllExercises = (props) => {

    var exercises = props.exercises.map((exercise) => {
      return(
        <div key={exercise.id}>
          <p>{exercise}</p>
        </div>
      )
    })


    return(
      <div>
        {exercises}
      </div>
    )


}
