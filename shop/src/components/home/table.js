import React from 'react'
import Form from './form'

export function Table(props){
  return(
    <div>
      <table className="table">
        <TableHead/>
        <TableBody content = {props.content} handleDelete={props.handleDelete}/>
      </table>
      <Form handleFormSubmit={props.handleFormSubmit}/>
    </div>
  )
}

function TableHead(){
  return(
    <thead>
      <tr>
        <th>
          Name
        </th>
        <th>
          Section
        </th>
      </tr>
    </thead>
  )
}

function TableBody(props){
  let bodyContent = props.content.map((row) => {
    return (
      <tr key={row.id}>
        <td>{row.name}</td>
        <td>{row.section}</td>
        <td><button onClick={()=> props.handleDelete(row.id)} className="btn btn-danger">Delete</button></td>
      </tr>
    )
  })
  return <tbody>{bodyContent}</tbody>
}

export default Table;
