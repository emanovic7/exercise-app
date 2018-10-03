

class Exercise extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
  }

  render(){
    return(
      <div>
        <h2>{this.props.exercise.name}</h2>
        <p>{this.props.exercise.description}</p>
        <button>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={ ()=> this.props.handleDelete(this.props.exercise.id) }>Delete</button>
      </div>
    )
  }


}
