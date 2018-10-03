

const AllExercises = (props) => {

    var exercises = props.exercises.map((exercise) => {
      return(

        <div key={exercise.id}>
          <h2>Exercises</h2>
          <h3>{exercise.name}</h3>
          <p>{exercise.description}</p>
        </div>
      )
    })


    return(
      <div>
        {exercises}
      </div>
    )


}
