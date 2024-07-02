import { useCallback, useState } from "react";

// for errors and data geting from the server
export const useUserActions = (actions, options = {}) =>{
    const [ errors, setErrors ] = useState(null);
    

    const result = useCallback(
        async (input) => {
            try {
                const res = await actions(input);

                if(!res)  return;
                setErrors(res.errors)       
                if(res.error) {
                    options.onError?.(res.error);
                }     
                
                if(res.data) {
                    options.onSuccess?.(res.error);
                }       
            } 
            // catch (error) {
                                
            // }
            finally {
                options.onComplete?.();
            }
        },[actions, options]
    )
    return {
        result,
        errors,
    }
} 