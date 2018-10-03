

class Exercise extends React.Component {

  render(){
    return(
      <div>
        <h2>{this.props.exercise.name}</h2>
        <p>{this.props.exercise.description}</p>
        <button onClick={ ()=> this.props.handleDelete(this.props.exercise.id) }>Delete</button>
      </div>
    )
  }


}
