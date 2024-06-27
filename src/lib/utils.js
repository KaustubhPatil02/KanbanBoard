import clsx from "clsx";
import { twMerge } from 'tailwind-merge'



export function merge(...inputs){
    return twMerge(clsx(...inputs))
} 