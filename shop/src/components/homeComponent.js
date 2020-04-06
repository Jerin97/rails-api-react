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
      <Table content={this.state.items}/>
    )
  }

  async indexContent(){
    let data = [];
    await axios.get(this.url+"/items").then(function(response){
      for(let row of response.data.items){
        data.push(row)
      }
    })
    if(!this.state.items.length){
      this.setState({
        items: data
      })
      return 0;
    }
  }
}


export default HomeComponent
