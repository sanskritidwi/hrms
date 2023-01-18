import React from 'react'
import TeamTree from './TeamTree';

const TreeNode=({ node })=> {
    const { children, label } = node;
  
  
    return (
      <>
        <div className='node'>
          <span>{label}</span>
        </div>
        <ul>
        {/* <hr/> */}
         <TeamTree treeData={children} />
      
        </ul>
      </>
    );
  }

export default TreeNode;