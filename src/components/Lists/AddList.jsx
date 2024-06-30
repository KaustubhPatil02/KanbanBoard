"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

const AddList = () => {

  const [editable, setEditable] = useState(false);

  if(editable){
    return(
      <li className='shrink-0 h-full w-[270px] select-none'>
        <form className='w-full rounded-lg bg-white text-black p-2 flex items-center font-medium text-sm mt-8'>
          <input 
            type="text" 
            className='w-full bg-transparent border-none focus:outline-none' 
            placeholder='Add to List' 
          />
          <Button 
            className='ml-2' 
            type='submit'
            onClick={() => setEditable(false)}
          >
            Add
          </Button>
        </form>
      </li>

    )
  }

  return (
   <div className='pl-10'>
      <li className='shrink-0 h-full w-[270px] select-none'>
      <Button 
      onClick={() => setEditable(true)}
      className="w-full rounded-lg bg-white text-black p-2 flex items-center font-medium text-sm mt-8" 
      type="button"
      >
        <Plus className='' size={36} />  Add to List
      </Button>
    </li>
   </div>
  );
};

export default AddList;