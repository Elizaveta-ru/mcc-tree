import React from 'react';
import './App.css';
import Tree, { Node } from './components/tree';
import { ROOT_ID } from './constants/app-constants'
import {v4 as uuid} from 'uuid';

function App() {
  const defaultTree: Node = {
    id: ROOT_ID,
    name: 'Root',
    nodes: [
      {
        id: uuid(),
        name: 'Node1',
        nodes: [
          {
            id: uuid(),
            name: 'Node1-1',
          },
        ],
      },
      {
        id: uuid(),
        name: 'Node2',
        nodes: [
          {
            id: uuid(),
            name: 'Node2-1',
            nodes: [
              {
                id: uuid(),
                name: 'Node2-1-1',
              },
              {
                id: uuid(),
                name: 'Node2-1-2',
                nodes: [
                  {
                    id: uuid(),
                    name: 'Node2-1-2-1'
                  },
                ],
              },
            ],
          },
          {
            id: uuid(),
            name: 'Node2-2',
          },
          {
            id: uuid(),
            name: 'Node2-3',
            nodes: [
              {
                id: uuid(),
                name: 'Node2-3-1',
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <ul>
      <Tree 
        id={defaultTree.id} 
        name={defaultTree.name} 
        nodes={defaultTree.nodes}
      />
    </ul>
  );
}

export default App;
