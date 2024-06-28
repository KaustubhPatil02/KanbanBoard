import React from 'react'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'
const ListContainers = () => {
    const onDrag = () => {

    }
    return (
        <DragDropContext onDragEnd={onDrag}>
            <Droppable
                droppableId='lists'
                type='lists'
                direction='horizontal'
            >
                {

                }

            </Droppable>

        </DragDropContext>
    )
}

export default ListContainers