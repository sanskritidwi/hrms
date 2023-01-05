
/* Table Component

Caller 
        <CollectionList columns={columns} data={data} />

*/

import React from "react";
export const CollectionList = ({ schema}) => {


  const {customRender,title} = schema;
   
      
  return (
   
  <div className='CollectionListWrapper'>
     {/* <table >
      <thead>
       
      </thead>
      <tbody >
      
      <tr></tr>
      </tbody>
    </table> */}
    {title}

    {customRender}
  </div>
  )
}
