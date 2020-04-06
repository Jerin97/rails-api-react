import React from 'react'
import Table from './home/table'
import axios from 'axios'

class HomeComponent extends React.Component{

  constructor(){
    super()
    this.url = "http://localhost:2000"
  }
  state = { items: [] }

  render(){
    this.indexContent()
    return(
      <Table content={this.state.items}
      handleFormSubmit={this.handleFormSubmit}
      handleDelete={this.handleDelete}/>
    )
  }

  async indexContent(afterSubmitCall=false){
    let data = [];
    await axios.get(this.url+"/items").then(function(response){
      for(let row of response.data.items){
        data.push(row)
      }
    })
    //optimise this section not compatible when no content
    if(!this.state.items.length || (afterSubmitCall)){
      this.setState({
        items: data
      })
      return 0;
    }
  }

  handleFormSubmit = item =>{
    axios.post('http://localhost:2000/items', item).then(response =>{
        if(response.status === 201){
          this.indexContent(true)
        }
        else{
          console.log("error")
        }
      }
    )
  }

  handleDelete = item_id =>{
    axios.delete('http://localhost:2000/items/'+item_id).then(response=>{
      if(response.status == 200)
        this.indexContent(true)
    })
  }
}


export default HomeComponent
