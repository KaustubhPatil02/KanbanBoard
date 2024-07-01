import { XCircle } from 'lucide-react'
import React from 'react'

const InputForm = ({ id, label, className, type, placeholder, errs }) => {
    return (
        <div>
            <div>
                {label ? (
                    <label className='text-sm  font-semibold text-white' htmlFor={id}>
                        {label}</label> 
                        ): null
                }
                <input type={type} className={className} placeholder={placeholder}/>

            </div>
            <div className='mt-2 text-xs text-red-700' id={`${id}-error`}>
                {errs?.[id]?.map((errs)=>(
                    <div key={errs} className=''>
                        <XCircle className='w-4 h-4 mr-2'/> 
                        {errs}
                    </div>
                ))}
            </div>
        </div> 
    )
}

export default InputForm