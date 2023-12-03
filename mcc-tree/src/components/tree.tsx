import React from 'react';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import { NEW_NODE_NAME, ROOT_ID } from '../constants/app-constants'
import './tree.css';

export interface Node {
    id: string;
    name: string;
    nodes?: Node[];
  }

interface Props extends Node {
  onDelete?(id: string): void;
}

function Tree(props: Props) {
  const {
    id,
    name,
    nodes,
    /* eslint-disable-next-line */
    onDelete,
  } = props;
  const [isEditable, setIsEditable] = useState(false);
  const [items, setItems] = useState(nodes || []);
  const [textValue, setTextValue] = useState(name);
  const [nextId, setNextId] = useState(uuid());
  
  function addNode() {
    setItems([...items, { id: nextId, name: NEW_NODE_NAME}]);
    setNextId(uuid());
  }

  function deleteNode(id: string) {
    const filteredItems = items.filter((item) => id !== item.id);
    setItems(filteredItems);
  }

  const tree = items?.map((node) => {
    if (node.nodes !== null) {
      return (
        <Tree 
          id={node.id} 
          key={node.id} 
          name={node.name} 
          nodes={node.nodes} 
          onDelete={deleteNode} />
      )
    }
  });

  return (
    <li>
      <div className='node-content'>
        <input 
          disabled={!isEditable} 
          onChange={(e) => setTextValue(e.target.value)} 
          type='text' 
          value={textValue} />
        {
          isEditable
          ? 
            <button onClick={() => setIsEditable(false)}>Save</button> 
          : 
            <div>
              <button onClick={() => addNode()}>Add</button>
              <button onClick={() => setIsEditable(true)}>Edit</button>
              { 
                id === ROOT_ID || !onDelete ? 
                  <></> : 
                  <button onClick={() => onDelete(id)}>Remove</button> 
              }
            </div>
        }
      </div>
      <ul>{tree}</ul>
    </li> 
    );
}

export default Tree;