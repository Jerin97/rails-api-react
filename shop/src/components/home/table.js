import React from 'react'

export function Table(props){
  return(
    <div>
      <table className="table">
        <TableHead/>
        <TableBody content = {props.content}/>
      </table>
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
  let bodyContent = props.content
  console.log(bodyContent)
  for(let row of bodyContent){
    console.log(row)
  }
  bodyContent = bodyContent.map((row) =>{
    console.log("staa")
    return `<tr key=${row.id}>
        <td>${row.name}</td>
        <td>${row.section}</td>
      </tr>`
  })
  return(
    <tbody>
      <tr>
        {bodyContent}
      </tr>
    </tbody>
  )
}

export default Table;
