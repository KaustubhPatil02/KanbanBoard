import React from 'react'
import { Draggable, Droppable } from '@hello-pangea/dnd';

const ListItems = ({index, key , colors, list}) => {
  return (
    <Draggable
    draggableId={list.id}
    index={index}
    >
        {(provided) => (
          <li
            {...provided.draggableProps}
            ref = {provided.innerRef} // Correctly assign ref
            className="shrink-0 w-[300px] h-full select-none"
          >
            list
          </li>
        )}
    </Draggable>
  )
}

export default ListItems