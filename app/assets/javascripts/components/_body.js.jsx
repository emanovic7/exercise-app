const url = 'https://wger.de/api/v2/equipment/';



class Body extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      exercises: []
    }
  }

  componentDidMount(){
    fetch(url)
    .then((response) => {return response.json()})
    .then((data) => {this.setState({ exercises: data })
     });
  }

  render(){
    return(
      <div>
        <AllExercises exercises={this.state.exercises} />
      </div>
    )
  }

}
