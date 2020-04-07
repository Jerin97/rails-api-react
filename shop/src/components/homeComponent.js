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

  indexContent(afterSubmitCall=false){
    let data = [];
    axios.get(this.url+"/items").then((response)=>{
      let { items:i } = response.data
      // this.setState({
      //   items: i
      // })
      console.log(i)
    })

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


