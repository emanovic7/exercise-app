

const AllExercises = (props) => {

    var exercises = props.exercises.map((exercise) => {
      return(
        <div key={exercise.id}>
          <Exercise exercise={exercise} handleDelete={props.handleDelete} />
        </div>
      )
    })


    return(
      <div>
        {exercises}
      </div>
    )
}
