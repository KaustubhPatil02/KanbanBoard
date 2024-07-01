"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import InputForm from '../InputForm';

const AddList = () => {

  const [editable, setEditable] = useState(false);

  const clickSubmit = (e) => {

  }

  if (editable) {
    return (
      <div className='pl-10'>
        <li className='shrink-0 h-full w-[270px] select-none'>
          <form
            action={clickSubmit}
            className='bg-white rounded-lg space-y-6 shadow-lg p-3'
          >
            <InputForm id="title"
              className="text-sm px-2 py-1 h-7 border-transparent font-medium focus:outline-none hover:border-input focus:border-input transition"
              placeholder="List Name"
              errs={"errors"}
            />
            <button
              type="submit"
              variant='secondary'
              size="sm"
              className="w-full rounded-lg bg-black text-gray-200 p-2 hover:bg-gray-800 "
              >Submit</button>
          </form>
        </li>
      </div>

    )
  }

  return (
    <div className='pl-10'>
      <li className='shrink-0 h-full w-[270px] select-none'>
        <Button
          onClick={() => setEditable(true)}
          className="w-full rounded-lg bg-white text-black p-2 flex items-center font-medium text-sm mt-5"
          type="button"
        >
          <Plus className='' size={36} />  Add to List
        </Button>
      </li>
    </div>
  );
};

export default AddList;