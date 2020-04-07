import React from 'react'
import Table from './home/table'
import axios from 'axios'

class HomeComponent extends React.Component{
  state = { items: [] }
  url = "http://localhost:2000/items"

  componentDidMount(){
    this.indexContent()
  }

  render(){
    return(
      <Table content={this.state.items}
      handleFormSubmit={this.handleFormSubmit}
      handleDelete={this.handleDelete}/>
    )
  }

  indexContent(){
    axios.get(this.url).then((response)=>{
        this.setState({
          items: response.data.items
        })
    })
  }

  handleFormSubmit = item =>{
    axios.post(this.url, item).then(response =>{
        if(response.status === 201){
          this.indexContent()
        }
        else{
          console.log("error")
        }
      }
    )
  }

  handleDelete = item_id =>{
    axios.delete(this.url+'/'+item_id).then(response=>{
      if(response.status === 200)
        this.indexContent()
    })
  }
}


export default HomeComponent


