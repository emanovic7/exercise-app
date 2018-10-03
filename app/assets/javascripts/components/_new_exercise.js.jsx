

const NewExercise = (props) => {

  let formFields = {}

  return(
    <span>
      <h3>Add new exercise</h3>
      <form>
        <input ref={input => formFields.name = input} placeholder = "Enter the name of this Exercise" /><br/>
        <input ref={input => formFields.description = input} placeholder = "Enter description" /><br />
        <button>Submit</button>
      </form>
    </span>
  )
}
