import React from 'react'
import TeamTree from './TeamTree';

const TreeNode=({ node })=> {
    const { childNodes, label } = node;
  
  
    return (
      <>
        {/* <div className='node'>
          <span>{label}</span>
        </div>
        <ul>
        {/* <hr/> 
         <TeamTree treeData={childNodes} />
      
        </ul> */}
      </>
    );
  }

export default TreeNode;