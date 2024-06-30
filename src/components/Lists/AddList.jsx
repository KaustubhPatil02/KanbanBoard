import React from 'react'
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'


const AddList = () => {
  return (
    <li className='shrink-0 h-full w-[270px]  select-none'>
      <button className="
            w-full rounded-lg bg-white text-black translate p-2 
            flex items-center font-medium text-sm mt-8
      ">
        Add to List <Plus className='ml-2' size={36} />
      </button>
    </li>
  )
}

export default AddList