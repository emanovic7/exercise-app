

class AllFruits extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      exercises: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/exercises.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({exercises: data});
    })
  }


  render(){
    var exercises = this.state.exercises.map((exercise) => {
      return(
        <div key={exercise.id}>
          <h1>{exercise.name}</h1>
          <p>{exercise.description}</p>
          <p>{exercise.body_part}</p>
          <p>{exercise.equipment}</p>
        </div>
      )
    })

    return(
      <div>
        {exercises}
      </div>
    )
  }


}
