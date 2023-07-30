import React from 'react'
import Link from 'next/link'
import { IArticle } from '@/types'

interface IPropType{
    article:IArticle;
}

const BlogCardWithImage = ({article}:IPropType) => {
    return (
        <div className='bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64'>
            <Link href="#">
                <span className='text-2xl w-2/3 text-white p-6 font-bold'>
                    {article.attributes.Title}
                </span>
            </Link>
            <div>
                <svg className="w-20 h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706" />
                </svg>
            </div>
        </div>
    )
}

export default BlogCardWithImage