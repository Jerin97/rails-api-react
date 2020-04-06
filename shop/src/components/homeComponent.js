import React from 'react'
import Table from './home/table'
import axios from 'axios'

class HomeComponent extends React.Component{
  url = "http://localhost:2000"
  state = {
    items: this.indexContent()
  }
  render(){
    return(
      <Table content={this.state.items}/>
    )
  }

  indexContent(){
    let data = [];
    axios.get(this.url+"/items").then(function(response){
      for(let row of response.data.items){
        data.push(row)
      }
    })
    return data
  }
}


export default HomeComponent
