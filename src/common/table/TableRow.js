import React from 'react'

const TableRow = ({rowData}) => {
  return (
    <tr> {
        rowData.items.map((data, index)=>{
            return <td>{data}</td>
        })
    }</tr>
   
  )
}

export default TableRow;