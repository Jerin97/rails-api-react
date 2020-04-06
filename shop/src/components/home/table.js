import React from 'react'
import Form from './form'

export function Table(props){
  return(
    <div>
      <table className="table">
        <TableHead/>
        <TableBody content = {props.content}/>
      </table>
      <Form updateIndex={props.updateIndex}/>
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
      </tr>
    )
  })
  return <tbody>{bodyContent}</tbody>
}

export default Table;
