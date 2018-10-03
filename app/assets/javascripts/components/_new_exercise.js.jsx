

const NewExercise = (props) => {

  let formFields = {}

  return(
    <span>
      <h3>Add new exercise</h3>
      <form onSubmit={ (e) => { props.handleFormSubmit(formFields.name.value,
      formFields.description.value); e.target.reset();} }>

        <input ref={input => formFields.name = input} placeholder='Enter the name of exercise'/>
        <input ref={input => formFields.description = input} placeholder='Enter a description' />
        <button>Submit</button>
      </form>
    </span>
  )
}
