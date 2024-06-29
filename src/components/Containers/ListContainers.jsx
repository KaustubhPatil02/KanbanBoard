'use client';
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import ListItems from './ListItems';

const ListContainers = ({ lists }) => {
  const [listData, setListData] = useState(lists);

  useEffect(() => {
    setListData(lists);
  }, [lists]); // Include lists in the dependency array if it's expected to change


  const onDragEnd = () => {
    // Handle drag end
  };
  
  const colors = [
    { bgColor: 'bg-indigo-500', cardColor: 'text-indigo-500' }, // Elegant deep blue
    { bgColor: 'bg-emerald-500', cardColor: 'text-emerald-500' }, // Soft, elegant green
    { bgColor: 'bg-purple-500', cardColor: 'text-purple-500' }, // Sophisticated purple
    { bgColor: 'bg-pink-500', cardColor: 'text-pink-500' } // Soft, inviting pink
  ];


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref = {provided.innerRef} // Correctly assign ref
            className="flex gap-x-3 h-full"
          >
            {listData.map((list, index) => (
              <ListItems 
                key={list.id}
                index={index}
                list={list}
                colors={colors[index]}
              />
            ))}
            {provided.placeholder}
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ListContainers;