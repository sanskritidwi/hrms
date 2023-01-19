import React from 'react';
import PageHeader  from '../../../common/PageHeader';
import TeamTree from './TeamTree';

const treeData = [
    {
      key: "0",
      label: "Dvelopment Team",
      children: [
        {
          key: "0-0",
          label: "React",
          children: [
            {
              key: "0-1-1",
              label: "Person",
              children:[
                {
                    key: "0-0",
                    label: "Person",
                },
                {
                    key: "0-0",
                    label: "Person",
                },
                {
                    key: "0-0",
                    label: "Person",
                }
              ]
            },
            {
              key: "0-1-2",
              label: "Person",
            },
          ],
        },
        {
            key: "0-0",
            label: "Python",
            children: [
              {
                key: "0-1-1",
                label: "Person",
              },
              {
                key: "0-1-2",
                label: "Person",
              },
            ],
          },
          {
            key: "0-0",
            label: "Node",
            children: [
              {
                key: "0-1-1",
                label: "Person",
              },
              {
                key: "0-1-2",
                label: "Person",
              },
            ],
          },
        
      ],
    },
    {
        key: "0-0",
        label: "QA Team",
        children: [
          {
            key: "0-1-1",
            label: "Person",
        },
          {
            key: "0-1-2",
            label: "Person",
        },
        ],
      },
    {
      key: "1",
      label: "BDE Team",
      children: [
        {
          key: "1-0",
          label: "Person",
        },
        {
          key: "0-0",
          label: "Person",
        },
      ],
    },
    {
      key: "2",
      label: "HR",
      children: [{
        key: "1-0",
        label: "Person",
      },
      {
        key: "0-0",
        label: "Person",
      },],
    },
  ];

const PgTeamTree = () => {
  return (
    <div className='PgTeamTreeWrapper pageBody'>
        {/* <PageHeader pageheading="Team Tree"/>
			<TeamTree treeData={treeData} /> */}

    </div>
  )
}

export default PgTeamTree;
