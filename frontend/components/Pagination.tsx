import { TDirection } from '@/types';
import React from 'react'
import qs from 'qs'
import { useRouter } from 'next/router';

interface IPropType{
    page:number;
    pageCount:number;
    redirectUrl?:string;
}

const Pagination = ({page,pageCount,redirectUrl='/' }:IPropType) => {
  
    const router = useRouter();
    
    const isPrevDisabled = ()=>{
        return page<=1;
    }

    const isNextDisabled = ()=>{
        return page>=pageCount;
    }

    const handlePaginate = async (direction:TDirection) =>{
        if(direction===1 && isNextDisabled())
        {
            return ;
        }
        if(direction===-1 && isPrevDisabled())
        {
            return;
        }

        const queryString = qs.stringify({
            ...router.query,
            page:page+direction
        })

        router.push(`${redirectUrl}?${queryString}`);

    }
  
    return (
    <div className='flex justify-center mt-12'>
        <button onClick={()=>handlePaginate(-1)} className={`${'bg-primary py-2 px-4 w-24 text-white rounded-md'} ${isPrevDisabled()?'disabled':''}`}>Previous</button>
        <button onClick={()=>handlePaginate(1)} className={`${'bg-primary ml-4 py-2 px-4 w-24 text-white rounded-md'} ${isNextDisabled()?'disabled':''}`}>Next</button>
    </div>
  )
}

export default Pagination