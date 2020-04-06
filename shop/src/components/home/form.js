import React from 'react'

class Form extends React.Component{
  initialState = {
    name: '',
    section: ''
  }

  state = this.initialState
  render(){
    const {name, section} = this.state
    return(
      <form>
        <input type="text" name="name" onChange={this.handleChange} value={name}/>
        <input type="text" name="section" onChange={this.handleChange} value={section}/>
        <button type="button" className="btn btn-info" onClick={()=>this.props.handleFormSubmit(this.state)}>Create</button>
      </form>
    )
  }

  // handleSubmit = () =>{
  //   this.setState(this.initialState)
  // }

  handleChange = event =>{
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
}

export default Form
