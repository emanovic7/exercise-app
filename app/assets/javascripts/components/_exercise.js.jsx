class Exercise extends React.Component{


constructor(props){
    super(props);
    this.state = {
      editable: false
    }
  }

  render(){

    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.exercise.name}/>:<h3>{this.props.exercise.name}</h3>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.exercise.description}/>:<p>{this.props.exercise.description}</p>

    return(
      <div>
        {name}
        {description}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.exercise.id)}>Delete</button>
      </div>
    )

  }

}
