import React from 'react'
import axios from 'axios'

class Form extends React.Component{
  initialState = {
    name: '',
    section: ''
  }

  state = this.initialState
  render(){
    return(
      <form>
        <input type="text" name="name" onChange={this.handleChange}/>
        <input type="text" name="section" onChange={this.handleChange}/>
        <button type="button" className="btn btn-info" onClick={this.handleSubmit}>Create</button>
      </form>
    )
  }

  handleChange = event =>{
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () =>{
    axios.post('http://localhost:2000/items', this.state).then(response =>{
        if(response.status === 201){
          console.log(response)
          this.props.updateIndex
        }
        else{
          console.log("error")
        }
      }
    )
  }
}

export default Form
