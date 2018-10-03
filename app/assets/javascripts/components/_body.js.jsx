const url = '/api/v1/exercises.json';



class Body extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      exercises: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewExercise = this.addNewExercise.bind(this)
  }

  handleFormSubmit(name, description) {
    let body = JSON.stringify({
      exercise: {name: name, description: description}
    })

    fetch('http://localhost:3000/api/v1/excersises', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((exercise)=>{
      this.addNewExercise(exercise)
    })
  }

  addNewExercise(exercise){
    this.setState({
      exercises: this.state.exercises.concat(exercise)
    })
  }

  componentDidMount(){
    fetch(url)
    .then((response) => {return response.json()})
    .then((data) => {this.setState({ exercises: data })
     });
  }



  render(){
    return(
      <span>
        <NewExercise handleFormSubmit={this.handleFormSubmit} />
        <br/><br/>
        <AllExercises exercises={this.state.exercises} />
      </span>
    )
  }

}
