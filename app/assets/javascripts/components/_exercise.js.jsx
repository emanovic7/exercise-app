

class Fruit extends React.Component {

  render(){
    return(
      <div>
        <h2>{this.props.fruit.name}</h2>
        <p>{this.props.fruit.description}</p>
      </div>
    )
  }


}
