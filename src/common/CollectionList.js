

/* Table Component

Caller 
        <CollectionList columns={columns} data={data} />

*/

import React from "react";


export const CollectionList = ({schema}) => {

const renderHeader = ()=>{
  return <thead>
    <tr>
       {schema.fields.map((item, index)=>{
        return(<td>{item}</td>)
       })}</tr>
  </thead>
}
   
const renderBody = ()=>{
  return(<tbody>
    <tr>{
      schema.schema.map((item,index)=>{
       Object.entries(schema.schema).forEach((key,value)=>{
        console.log(key, key[1].name);
        return <tr>{key[1].name}</tr>
       })
      })}</tr>
  </tbody>)
}
      
  return (
   
  <div className='CollectionListWrapper'>
     <table >
      {renderHeader()}
      {renderBody()}
    </table>
   

  </div>
  )
}
