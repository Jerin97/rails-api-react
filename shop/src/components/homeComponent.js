import React from 'react'
import Table from './home/table'
import axios from 'axios'
import ReactDOM from 'react-dom'


class HomeComponent extends React.Component{
  state = { items: [], updateItemSelected:false }
  url = "http://localhost:2000/items"

  componentDidMount(){
    this.indexContent()
  }

  render(){
    return(
      <Table content={this.state.items}
      handleFormSubmit={this.handleFormSubmit}
      handleDelete={this.handleDelete}
      handleUpdate={this.handleUpdate}/>
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

  handleUpdate = (row, submitted=false)=>{
    if(submitted){
      let item = {name: document.getElementById('name').value,
        section: document.getElementById('section').value
      }
      axios.put(this.url+'/'+row, item).then(response=>{
        if(response.status  == 200){
          ReactDOM.render(<button onClick={()=>false} className="btn">Update</button>,
          document.getElementById(row))
          this.indexContent()
        }
        else
          console.log("Error")
      })
    }
    else{
      let selectedItem
      for(let item of this.state.items){
        if(item.id == row){
          selectedItem = item
          break
        }
      }
      ReactDOM.render(<input type="text" id="name"/>, document.getElementById(row+'name'))
      ReactDOM.render(<input type="text" id="section"/>, document.getElementById(row+'section'))
      ReactDOM.render(<span id="submitBtn" onClick={()=>this.handleUpdate(row, true)} className="btn btn-success">Update</span>,
      document.getElementById(row))
    }
  }
}


export default HomeComponent


